import React from 'react';

import { Container } from '../../styles/GlobalStyle';
import {
  Divs,
  DivCustonDetails,
  AreaInventario,
  Elements,
  DivFragmentos,
} from './styled';
import axios from '../../services/axios';
import { useSelector } from 'react-redux';
import { ListaUser, Linha } from './styled';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import {
  GiDustCloud,
  GiFireBowl,
  GiWaterSplash,
  GiWindHole,
} from 'react-icons/gi';

export default function Inventario() {
  const {
    status: player,
    equiped: equiped,
    fragments: fragments,
  } = useSelector((state) => state.auth);
  const [itens, setItens] = React.useState([]);
  const [vazio, setVazio] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function getScore() {
      const score = await axios.get(`/inventario/${player.id}`);
      const data = score.data;

      setItens(data);

      if (data.length === 0) {
        setVazio(true);
      }
    }
    getScore();
  }, []);

  function handleClick({ ...item }) {
    Swal.fire({
      title: `Deseja equipar essa(e) ${item.class}?`,

      text: `${item.nome} Tier: ${item.tier} (For: ${item.attributes_strength}, Des: ${item.attributes_dexterity}, Int: ${item.attributes_intelligence}, Sor: ${item.attributes_luck})`,

      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: `Não`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Item equipado!', '', 'success');
        if (item.class === 'Sword') {
          dispatch(
            actions.changeItens({
              id: player.id,
              sword: item.nome,
              armor: equiped.armor,
              helmet: equiped.helmet,
              amulet: equiped.amulet,
              glove: equiped.glove,

              swordAtr1: item.attributes_strength,
              swordAtr2: item.attributes_dexterity,
              armorAtr1: equiped.armorAtr1,
              armorAtr2: equiped.armorAtr2,
              helmetAtr1: equiped.helmetAtr1,
              helmetAtr2: equiped.helmetAtr2,
              gloveAtr1: equiped.gloveAtr1,
              gloveAtr2: equiped.gloveAtr2,
              amuletAtr1: equiped.amuletAtr1,
              amuletAtr2: equiped.amuletAtr2,
            }),
          );
        } else if (item.class === 'Armor') {
          dispatch(
            actions.changeItens({
              id: player.id,
              sword: equiped.sword,
              armor: item.nome,
              helmet: equiped.helmet,
              amulet: equiped.amulet,
              glove: equiped.glove,

              swordAtr1: equiped.swordAtr1,
              swordAtr2: equiped.swordAtr2,
              armorAtr1: item.attributes_strength,
              armorAtr2: item.attributes_luck,
              helmetAtr1: equiped.helmetAtr1,
              helmetAtr2: equiped.helmetAtr2,
              gloveAtr1: equiped.gloveAtr1,
              gloveAtr2: equiped.gloveAtr2,
              amuletAtr1: equiped.amuletAtr1,
              amuletAtr2: equiped.amuletAtr2,
            }),
          );
        } else if (item.class === 'Amulet') {
          dispatch(
            actions.changeItens({
              id: player.id,
              amulet: item.nome,
              sword: equiped.sword,
              armor: equiped.armor,
              helmet: equiped.helmet,
              glove: equiped.glove,

              swordAtr1: equiped.swordAtr1,
              swordAtr2: equiped.swordAtr2,
              armorAtr1: equiped.armorAtr1,
              armorAtr2: equiped.armorAtr2,
              helmetAtr1: equiped.helmetAtr1,
              helmetAtr2: equiped.helmetAtr2,
              gloveAtr1: equiped.gloveAtr1,
              gloveAtr2: equiped.gloveAtr2,
              amuletAtr1: item.attributes_intelligence,
              amuletAtr2: item.attributes_luck,
            }),
          );
        } else if (item.class === 'Helmet') {
          dispatch(
            actions.changeItens({
              id: player.id,
              amulet: equiped.amulet,
              sword: equiped.sword,
              armor: equiped.armor,
              helmet: item.nome,
              glove: equiped.glove,

              swordAtr1: equiped.swordAtr1,
              swordAtr2: equiped.swordAtr2,
              armorAtr1: equiped.armorAtr1,
              armorAtr2: equiped.armorAtr2,
              helmetAtr1: item.attributes_dexterity,
              helmetAtr2: item.attributes_luck,
              gloveAtr1: equiped.gloveAtr1,
              gloveAtr2: equiped.gloveAtr2,
              amuletAtr1: equiped.amuletAtr1,
              amuletAtr2: equiped.amuletAtr2,
            }),
          );
        }
      }
    });
  }

  return (
    <Container>
      <DivCustonDetails>
        <Divs>
          <div>
            <h2>INVENTARIO</h2>
          </div>
          {vazio ? <h3>SEM ITENS NO INVENTARIO</h3> : ''}
          <AreaInventario>
            {itens.map((item) => {
              const imageName = `./img/${item.nome}.png`;
              const itenTier = item.tier;
              let armorCustom;
              let helmetCustom;
              if (item.class === 'Armor') {
                armorCustom = true;
              } else {
                armorCustom = false;
              }
              if (item.class === 'Helmet') {
                helmetCustom = true;
              } else {
                helmetCustom = false;
              }

              return (
                <ListaUser
                  key={String(item.id)}
                  className={itenTier}
                  onClick={() => handleClick(item)}
                >
                  <div>
                    <Linha className="img">
                      <img
                        className="imageEnemy"
                        src={imageName}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = `./img/${item.class}.png`;
                        }}
                      />
                    </Linha>
                  </div>
                  <div>
                    <Linha className="itemname">
                      <b fontSize={12}>{item.nome}</b>
                    </Linha>
                    <Linha>Tipo: {item.class}</Linha>
                    <Linha>Tier: {itenTier}</Linha>
                    <Linha>
                      {item.attributes_strength
                        ? armorCustom
                          ? 'Força: '
                          : 'Força: '
                        : null}
                      {item.attributes_strength || null}
                    </Linha>
                    <Linha>
                      {item.attributes_dexterity
                        ? armorCustom
                          ? 'Destreza: '
                          : 'Destreza: '
                        : null}
                      {item.attributes_dexterity || null}
                    </Linha>
                    <Linha>
                      {item.attributes_intelligence
                        ? helmetCustom
                          ? 'Inteligencia: '
                          : 'Inteligencia: '
                        : null}
                      {item.attributes_intelligence || null}
                    </Linha>
                    <Linha>
                      {item.attributes_luck ? 'Sorte: ' : null}
                      {item.attributes_luck || null}
                    </Linha>
                  </div>
                  <div>
                    <Linha>Valor: {item.price}</Linha>
                    <Linha>
                      Criado por: <b>{item.creator_item}</b>
                    </Linha>
                    <Linha>Bonus: 0</Linha>
                  </div>
                </ListaUser>
              );
            })}
          </AreaInventario>
          <DivFragmentos>
            <h3>FRAGMENTOS</h3>
            <Elements>
              <div className="gray">
                <GiWindHole color="gray" />
                <span>Fragmentos de Ar: </span>
                {fragments.airfragment}
              </div>
              <div className="blue">
                <GiWaterSplash color="blue" />
                <span>Fragmentos de Água: </span>
                {fragments.waterfragment}
              </div>
              <div className="brown">
                <GiDustCloud color="brown" />
                <span>Fragmentos de Terra: </span>
                {fragments.earthfragment}
              </div>
              <div className="red">
                <GiFireBowl color="red" />
                <span>Fragmentos de Fogo: </span>
                {fragments.firefragment}
              </div>
            </Elements>
          </DivFragmentos>
        </Divs>
      </DivCustonDetails>
    </Container>
  );
}
