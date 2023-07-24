import React from 'react';
import {
  Divs,
  DivCustonDetails,
  AreaDiv,
  AreaInfo,
  NameDiv,
  Skills,
} from './styled';
import axios from '../../../services/axios';
import { FaBolt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Custon, FinalFight, GamePveArea, LoadBattle } from '../Pvp/styled';
import { battle, getRandom } from '../../../components/Functions/functions';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as actions from '../../../store/modules/auth/actions';

export default function Xogunato() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    status: player,
    equiped: equiped,
    //fragments: fragments,
  } = useSelector((state) => state.auth);

  const [shogun, setShogun] = React.useState({});
  const [data, setData] = React.useState(new Date());
  const [atualData] = React.useState(new Date());
  const [temp, setTemp] = React.useState({});
  const [stage, setStage] = React.useState(0);
  const [stageEnemy, setStageEnemy] = React.useState({});
  const [realShogun, setRealShogun] = React.useState({});

  React.useEffect(() => {
    async function getShogun() {
      const score = await axios.get(`/shogun/1`);
      const data = score.data;

      setShogun(data);

      const date = new Date(data.updated_at);
      setData(date);

      setTemp(calcXogunato(date, atualData));

      const potate = await axios.get(`/users/${data.id_player}`);
      setRealShogun(potate.data);
    }
    getShogun();
  }, []);

  function zeroLeft(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  }

  function dataForm(data) {
    const date = data;

    const dateUpdated = `Dia: ${date.getDate()}/${zeroLeft(
      date.getMonth() + 1,
    )}/${date.getFullYear()}
      Hora: ${zeroLeft(date.getHours())}:${zeroLeft(
      date.getMinutes(),
    )}:${zeroLeft(date.getSeconds())}`;

    return dateUpdated;
  }

  function calcXogunato(dataXogunato, dataAtual) {
    // dia 20 - 23:53:34
    let segundoXogunato = dataXogunato.getSeconds(); // 59
    let minutoXogunato = dataXogunato.getMinutes(); // 01
    let horaXogunato = dataXogunato.getHours(); // 14
    let diaXogunato = dataXogunato.getDate(); //5
    // dia 21 - 13:37:52
    let segundoAtual = dataAtual.getSeconds(); // 10
    let minutoAtual = dataAtual.getMinutes(); // 59
    let horaAtual = dataAtual.getHours(); // 13
    let diaAtual = dataAtual.getDate(); // 9

    let segundosCorridos = 0;
    let minutosCorridos = 0;
    let horasCorridas = 0;
    let diasCorridos = 0;

    if (segundoXogunato > segundoAtual) {
      segundosCorridos = +zeroLeft(60 - segundoXogunato + segundoAtual);
      minutoXogunato++;
    } else {
      segundosCorridos = +zeroLeft(segundoAtual - segundoXogunato);
    }

    if (minutoXogunato > minutoAtual) {
      minutosCorridos = +zeroLeft(60 - minutoXogunato + minutoAtual);
      horaXogunato++;
    } else {
      minutosCorridos = +zeroLeft(minutoAtual - minutoXogunato);
    }

    if (horaXogunato > horaAtual) {
      horasCorridas = +zeroLeft(24 - horaXogunato + horaAtual);
      diaXogunato++;
    } else {
      horasCorridas = +zeroLeft(horaAtual - horaXogunato);
    }

    if (diaXogunato > diaAtual) {
      diasCorridos = +zeroLeft(diaAtual - diaXogunato);
    } else {
      diasCorridos = +zeroLeft(diaAtual - diaXogunato);
    }

    const bonusGold = Math.floor(
      (minutosCorridos + horasCorridas * 60 + diasCorridos * 24 * 60) / 10,
    );

    const bonusRep = Math.floor(
      (minutosCorridos + horasCorridas * 60 + diasCorridos * 24 * 60) / 15,
    );

    const bonusFragments = Math.floor((horasCorridas + diasCorridos * 24) / 4);

    const itemBonus = (
      (minutosCorridos + horasCorridas * 60 + diasCorridos * 24 * 60) *
      0.01
    ).toFixed(2);

    return {
      text: `Tempo de Xogunato: ${diasCorridos} dias, ${horasCorridas} horas, ${minutosCorridos} minutos e ${segundosCorridos} segundos`,
      bonusGold,
      bonusFragments,
      itemBonus,
      bonusRep,
    };
  }

  const handleSubmit = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Sem energia!',
    });
  };

  const failure = () => {
    Swal.fire({
      icon: 'error',
      title: 'DERROTA',
      text: 'Você não conseguiu vencer o Shogun!',
    });
  };

  if (stage === 0) {
    return (
      <DivCustonDetails>
        <h1>Luta pelo Xogunato</h1>
        <AreaDiv>
          <Divs>
            <div className="reverse">
              <img className="imageEnemy" src="../img/exemplo.png" />
            </div>
            <AreaInfo>
              <NameDiv>Informações</NameDiv>

              <Skills>
                <div>
                  <h3>Dados</h3>
                  <div className="nome">
                    Nome: <span>{realShogun.nome}</span>
                  </div>
                  <div className="level">
                    <span>Level:</span> <span>{realShogun.level}</span>
                  </div>
                  <div className="vitoria">
                    <span>Vitórias Pvp:</span>
                    <span>{realShogun.victorypvp}</span>
                  </div>
                </div>
                <div>
                  <h3>Status</h3>
                  <div className="str">
                    <span>Força:</span> <span>{realShogun.strength}</span>
                  </div>
                  <div className="dex">
                    <span>destreza: </span>
                    <span>{realShogun.dexterity}</span>
                  </div>
                  <div className="int">
                    <span>Inteligencia: </span>
                    <span>{realShogun.intelligence}</span>
                  </div>
                  <div className="luc">
                    <span>Sorte: </span>
                    <span>{realShogun.luck}</span>
                  </div>
                </div>
              </Skills>
            </AreaInfo>
            {shogun.id_player === player.id ? (
              <button>VOCÊ É O SHOGUN</button>
            ) : (
              <button
                className="buttonCuston"
                onClick={() => {
                  if (player.energy < 10) {
                    handleSubmit();
                    return;
                  } else {
                    setStageEnemy(realShogun);
                    setStage(1);
                  }
                }}
              >
                <div>Desafiar -10</div>
                <FaBolt color="yellow" className="icons" size="20" />
              </button>
            )}
          </Divs>
          <div className="dadosXogun">
            {shogun.id_player === player.id ? (
              <h3 className="effect">VOCÊ É O SHOGUN</h3>
            ) : (
              <h3>CONQUISTE O XOGUNATO</h3>
            )}

            <div>
              <p>
                <b>Xogunato começou:</b>
              </p>
              <p>{dataForm(data)}</p>
            </div>
            <div>
              <p>
                <b>Última atualização:</b>
              </p>
              <p>{dataForm(atualData)}</p>
            </div>
            <div>
              <p>
                <b>Tempo do Xogunato atual:</b>
              </p>
              <p>{temp.text}</p>
              <p>{}</p>
            </div>
            <div>
              {shogun.id_player === player.id ? (
                <div>
                  <p>Suas recompensas até o momento:</p>
                  <p>Gold: {temp.bonusGold} golds</p>
                  <p>Reputação: {temp.bonusRep} R</p>
                  <p>Fragmentos: {temp.bonusFragments} fragmentos</p>
                  <p>Chance de item: {temp.itemBonus}% (OFF)</p>
                </div>
              ) : (
                <div>
                  <p>Recompensas para o Shogun:</p>
                  <p>Gold: 1 gold a cada 10 minutos</p>
                  <p>Reputação: 1 ponto a cada 30 minutos</p>
                  <p>Fragmentos: 1 gold a cada 4 horas</p>
                  <p>Chance de item: 0.01% a cada 1 minuto (OFF)</p>
                </div>
              )}
            </div>
          </div>
        </AreaDiv>
      </DivCustonDetails>
    );
  }

  if (stage === 1) {
    dispatch(
      actions.energyRecall2({
        id: player.id,
        energy: player.energy - 10,
      }),
    );

    const random1 = getRandom(1, 4);
    const random2 = getRandom(1, 4);
    const random3 = getRandom(1, 4);
    // const random4 = getRandom(1, 10000);

    //FRAGMENTS;
    let frags = temp.bonusFragments + 1;
    const fire = getRandom(0, frags);
    frags = frags - fire;
    const air = getRandom(0, frags);
    frags = frags - air;
    const water = getRandom(0, frags);
    frags = frags - water;
    const earth = getRandom(0, frags);
    frags = frags - earth;
    console.log(frags);

    // if (random4 <= temp.itemBonus * 100) {
    //   const arrayAll = [...allItems];
    //   let itemSort = getRandom(0, Number(arrayAll.length)); //Random id item;

    //   let id = arrayAll[itemSort].id;
    //   setRewardItem(true);

    //   dispatch(
    //     actions.itemRequest({
    //       id: id,
    //     }),
    //   );
    // }

    const battle1 = battle(
      random1,
      { ...player },
      { ...stageEnemy },
      { ...equiped },
    );
    const battle2 = battle(
      random2,
      { ...player },
      { ...stageEnemy },
      { ...equiped },
    );
    const battle3 = battle(
      random3,
      { ...player },
      { ...stageEnemy },
      { ...equiped },
    );

    const vitoria1 = battle1.vitoria;
    const vitoria2 = battle2.vitoria;
    const vitoria3 = battle3.vitoria;
    console.log(realShogun);
    const vitoriaSymb =
      battle1.vitoriaSymbol + battle2.vitoriaSymbol + battle3.vitoriaSymbol;

    let victory = false;

    if (vitoriaSymb > 0) {
      victory = true;

      console.log('VOCÊ É O NOVO SHOGUN');

      dispatch(
        actions.payQuest({
          gold: realShogun.gold + temp.bonusGold,
          reputacao: realShogun.reputacao + temp.bonusRep,
          xp: realShogun.xp,
          id: shogun.id_player,
          victorypvp: realShogun.victorypvp,
        }),
      );

      dispatch(
        actions.payFragments({
          id: realShogun.id,
          waterfragment: realShogun.water_fragment + water,
          airfragment: realShogun.air_fragment + air,
          firefragment: realShogun.fire_fragment + fire,
          earthfragment: realShogun.earth_fragment + earth,
        }),
      );

      dispatch(
        actions.shogunQuest({
          id: player.id,
        }),
      );
    } else {
      victory = false;
      failure();
    }

    return (
      <GamePveArea>
        <FinalFight>
          <Custon>
            <h3>COMBATE 1!</h3>
            <div>{battle1.result}</div>
          </Custon>
          <LoadBattle>
            <div>Ataque do Jogador: {battle1.ataquePowerPlayer}</div>
            <div>Ataque do enemy: {battle1.ataquePowerPve}</div>
            <div className="result">Resultado: {vitoria1}</div>
            <div></div>
          </LoadBattle>
          <Custon>
            <h3>COMBATE 2!</h3>
            <div>{battle2.result}</div>
          </Custon>
          <LoadBattle>
            <div>Ataque do Jogador: {battle2.ataquePowerPlayer}</div>
            <div>Ataque do enemy: {battle2.ataquePowerPve}</div>
            <div className="result">Resultado: {vitoria2}</div>
          </LoadBattle>
          <Custon>
            <h3>COMBATE 3!</h3>
            <div>{battle3.result}</div>
          </Custon>
          <LoadBattle>
            <div>Ataque do Jogador: {battle3.ataquePowerPlayer}</div>
            <div>Ataque do enemy: {battle3.ataquePowerPve}</div>
            <div className="result">Resultado: {vitoria3}</div>
          </LoadBattle>
          {victory ? (
            <div>
              <Custon>
                <h3>RECOMPENSAS</h3>
              </Custon>
              <LoadBattle>VOCÊ É O NOVO SHOGUN!</LoadBattle>
            </div>
          ) : (
            <div>
              <Custon>
                <h3>DERROTA</h3>
              </Custon>
              <LoadBattle>VOCÊ PERDEU!</LoadBattle>
            </div>
          )}

          <button onClick={() => navigate('/game')}>VOLTAR</button>
        </FinalFight>
      </GamePveArea>
    );
  }
}
