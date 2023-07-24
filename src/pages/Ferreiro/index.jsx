import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Elements, GameWindow } from './styled';
import {
  GiDustCloud,
  GiFireBowl,
  GiWaterSplash,
  GiWindHole,
} from 'react-icons/gi';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { getRandom } from '../../components/Functions/functions';
import * as actions from '../../store/modules/auth/actions';
import { useNavigate } from 'react-router-dom';

export default function Ferreiro() {
  const { fragments: fragments, status: player } = useSelector(
    (state) => state.auth,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [typeItem, setTypeItem] = React.useState('Null');
  const [air, setAir] = React.useState(0);
  const [earth, setEarth] = React.useState(0);
  const [fire, setFire] = React.useState(0);
  const [water, setWater] = React.useState(0);
  const [coast, setCoast] = React.useState(20);
  const [namer, setNamer] = React.useState('');

  React.useEffect(() => {
    if (typeItem === 'Sword') {
      setCoast((air + earth) * 20 + 20);
      setWater(0);
      setFire(0);
    }
    if (typeItem === 'Armor') {
      setCoast((fire + earth) * 20 + 20);
      setWater(0);
      setAir(0);
    }
    if (typeItem === 'Helmet') {
      setCoast((water + air) * 20 + 20);
      setFire(0);
      setEarth(0);
    }
    if (typeItem === 'Amulet') {
      setCoast((water + fire) * 20 + 20);
      setEarth(0);
      setAir(0);
    }
  }, [typeItem, water, fire, earth, air]);

  const craftItem = (
    nomeDoItem,
    tipoDoItem,
    fAr,
    fAgua,
    fTerra,
    fFogo,
    custo,
    nomeJogador,
  ) => {
    const randomChange = getRandom(0, 100); // Chance de quebra 0-5 - normal 6-80 - quebra 81-100
    let bonus = 0;

    if (randomChange < 6) {
      bonus = 0.5;
    }

    const nome = nomeDoItem;
    const classe = tipoDoItem;

    const minAr = Math.floor(fAr / 2) + Math.floor(bonus * fAr);
    const maxAr = Math.floor(fAr) + Math.floor(bonus * fAr);
    const minAgua = Math.floor(fAgua / 2) + Math.floor(bonus * fAgua);
    const maxAgua = Math.floor(fAgua) + Math.floor(bonus * fAgua);
    const minTerra = Math.floor(fTerra / 2) + Math.floor(bonus * fTerra);
    const maxTerra = Math.floor(fTerra) + Math.floor(bonus * fTerra);
    const minFogo = Math.floor(fFogo / 2) + Math.floor(bonus * fFogo);
    const maxFogo = Math.floor(fFogo) + Math.floor(bonus * fFogo);

    const attributesStrength = getRandom(minTerra, maxTerra);
    const attributesDexterity = getRandom(minAr, maxAr);
    const attributesIntelligence = getRandom(minAgua, maxAgua);
    const attributesLuck = getRandom(minFogo, maxFogo);

    const calcTier =
      attributesStrength +
      attributesDexterity +
      attributesIntelligence +
      attributesLuck;

    let tier = 'D';

    if (calcTier > 4 && calcTier < 7) {
      tier = 'C';
    } else if (calcTier > 7 && calcTier < 11) {
      tier = 'B';
    } else if (calcTier > 11 && calcTier < 15) {
      tier = 'A';
    } else if (calcTier > 15 && calcTier < 20) {
      tier = 'S';
    } else if (calcTier > 20) {
      tier = 'SS';
    }

    const priceItem = coast * 2 + calcTier * 30;
    const creatorItem = nomeJogador;
    const id = player.id;

    dispatch(
      actions.goldChangeRequest({
        id: player.id,
        gold: player.gold - coast,
      }),
    );

    dispatch(
      actions.requestFragments({
        waterfragment: fragments.waterfragment - fAgua,
        airfragment: fragments.airfragment - fAr,
        firefragment: fragments.firefragment - fFogo,
        earthfragment: fragments.earthfragment - fTerra,
      }),
    );

    if (randomChange < 5) {
      console.log('ITEM LENDÁRIO', randomChange);
      Swal.fire({
        icon: 'success',
        title: 'Item Forjado',
        text: 'Você forjou um item lendário.',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/inventario');
        }
      });
      dispatch(
        actions.createItemRequest({
          id,
          nome,
          classe,
          attributesStrength,
          attributesDexterity,
          attributesIntelligence,
          attributesLuck,
          tier,
          priceItem,
          creatorItem,
        }),
      );
    } else if (randomChange > 80) {
      console.log('O item quebrou', randomChange);

      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'O Item quebrou...',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/inventario');
        }
      });
    } else if (randomChange > 6 || randomChange < 80) {
      console.log('Item Crafitado', randomChange);

      Swal.fire({
        icon: 'success',
        title: 'Item Forjado',
        text: 'Você forjou um item.',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/inventario');
        }
      });

      dispatch(
        actions.createItemRequest({
          id,
          nome,
          classe,
          attributesStrength,
          attributesDexterity,
          attributesIntelligence,
          attributesLuck,
          tier,
          priceItem,
          creatorItem,
        }),
      );
    } else {
      console.log('O item quebrou', randomChange);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];

    if (namer.length > 20 || namer.length < 4) errors.push('Nome inválido.');

    if (!typeItem) errors.push('Você precisa escolher um tipo de item.');

    if (typeItem === 'Sword') {
      if (air < 2) errors.push('Valor mínimo de Fragmento é 2.');
      if (earth < 2) errors.push('Valor mínimo de Fragmento é 2.');
    }

    if (typeItem === 'Armor') {
      if (fire < 2) errors.push('Valor mínimo de Fragmento é 2.');
      if (earth < 2) errors.push('Valor mínimo de Fragmento é 2.');
    }

    if (typeItem === 'Helmet') {
      if (air < 2) errors.push('Valor mínimo de Fragmento é 2.');
      if (water < 2) errors.push('Valor mínimo de Fragmento é 2.');
    }

    if (typeItem === 'Amulet') {
      if (water < 2) errors.push('Valor mínimo de Fragmento é 2.');
      if (fire < 2) errors.push('Valor mínimo de Fragmento é 2.');
    }

    if (player.gold < coast) errors.push('Dinheiro insuficiente.');

    if (errors.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: errors,
      });
    } else {
      Swal.fire({
        title: `Deseja forjar esse(a) ${typeItem}?`,

        html:
          '<b>Nome do Item:</b> ' +
          namer +
          ' <b>Forjado por: </b>' +
          player.nome +
          '<br />' +
          '<b>Fragmentos: </b>' +
          `Ar: ${air}, Água: ${water}, Terra: ${earth}, Fogo: ${fire}`,
        showDenyButton: true,
        confirmButtonText: `Sim (Custa: ${coast} golds)`,
        denyButtonText: `Não`,
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('Forjado');
          craftItem(
            namer,
            typeItem,
            air,
            water,
            earth,
            fire,
            coast,
            player.nome,
          );
        }
      });
    }
  };

  return (
    <Container>
      <GameWindow>
        <h2>FERREIRO</h2>
        <div className="area50">
          <div className="inventario">
            <h3>INVENTARIO</h3>
            <Elements>
              <div>
                <GiWindHole color="gray" />
                <span>Fragmentos de Ar: </span>
                {fragments.airfragment}
              </div>
              <div>
                <GiWaterSplash color="blue" />
                <span>Fragmentos de Água: </span>
                {fragments.waterfragment}
              </div>
              <div>
                <GiDustCloud color="brown" />
                <span>Fragmentos de Terra: </span>
                {fragments.earthfragment}
              </div>
              <div>
                <GiFireBowl color="red" />
                <span>Fragmentos de Fogo: </span>
                {fragments.firefragment}
              </div>
            </Elements>
          </div>
          <div className="area2-4">
            <h3>FORJA</h3>
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="namer" className="input0">
                Nome
                <input
                  type="text"
                  id="namer"
                  name="namer"
                  placeholder="Nome do seu item..."
                  onChange={(e) => setNamer(e.target.value)}
                />
              </label>

              <label className="label1">
                Sword
                <input
                  type="radio"
                  id="Sword"
                  name="type"
                  value="Sword"
                  onClick={() => {
                    setTypeItem('Sword');
                  }}
                />
              </label>
              <label className="label1">
                Armor
                <input
                  type="radio"
                  id="Armor"
                  name="type"
                  value="Armor"
                  onClick={() => {
                    setTypeItem('Armor');
                  }}
                />
              </label>
              <label className="label1">
                Helmet
                <input
                  type="radio"
                  id="Helmet"
                  name="type"
                  value="Helmet"
                  onClick={() => {
                    setTypeItem('Helmet');
                  }}
                />
              </label>
              <label className="label1">
                Amulet
                <input
                  type="radio"
                  id="Amulet"
                  name="type"
                  value="Amulet"
                  onClick={() => {
                    setTypeItem('Amulet');
                  }}
                />
              </label>

              <label className="label2 input5">
                Fragmento de Ar:
                {typeItem === 'Helmet' || typeItem === 'Sword' ? (
                  <input
                    type="number"
                    defaultValue={0}
                    name="air"
                    id="air"
                    min={0}
                    max={fragments.airfragment}
                    onChange={(e) => setAir(+e.target.value)}
                  />
                ) : (
                  <input type="number" disabled value={0} />
                )}
              </label>
              <label className="label2 input6">
                Fragmento de Água:
                {typeItem === 'Helmet' || typeItem === 'Amulet' ? (
                  <input
                    type="number"
                    defaultValue={0}
                    name=""
                    id=""
                    min={0}
                    max={fragments.waterfragment}
                    onChange={(e) => setWater(+e.target.value)}
                  />
                ) : (
                  <input type="number" disabled value={0} />
                )}
              </label>
              <label className="label2 input7">
                Fragmento de Terra:
                {typeItem === 'Sword' || typeItem === 'Armor' ? (
                  <input
                    type="number"
                    defaultValue={0}
                    name=""
                    id=""
                    min={0}
                    max={fragments.earthfragment}
                    onChange={(e) => setEarth(+e.target.value)}
                  />
                ) : (
                  <input type="number" disabled value={0} />
                )}
              </label>
              <label className="label2 input8">
                Fragmento de Fogo:
                {typeItem === 'Armor' || typeItem === 'Amulet' ? (
                  <input
                    defaultValue={0}
                    type="number"
                    name=""
                    id=""
                    min={0}
                    max={fragments.firefragment}
                    onChange={(e) => setFire(+e.target.value)}
                  />
                ) : (
                  <input type="number" disabled value={0} />
                )}
              </label>

              <div className="input9">
                Custo para forjar:
                <span>{coast} golds</span>
              </div>

              <div className="input10">
                Criado por:
                <span>{player.nome}</span>
              </div>

              <button type="Submit">Forjar</button>
            </form>
          </div>
          <div>
            <h3>AJUDA</h3>
            <div className="areaAjuda">
              <h4>Instruções:</h4>
              <h5>
                1) Escolha um nome de no máximo 20 caractéres para o item.
              </h5>
              <h5>2) Escolha o tipo do item.</h5>
              <h5>
                3) Use seus fragmentos para forjar o item. Quantos mais
                fragmentos melhor os atributos.
              </h5>
              <h5>4) Chance da forja:</h5>
              <p>a) 5% do item ser lendario (150%); </p>
              <p>b) 75% do item normal (100%) </p>
              <p>c) 20% do item falhar (0%) </p>
              <h5>
                5) O item forjado poderá ser comprado no mercado, ou ganho nas
                areas pvp e pve. O nome do jogador que o forjou ficará marcado
                no mesmo.
              </h5>
            </div>
          </div>
          <div></div>
        </div>
      </GameWindow>
    </Container>
  );
}
