import React from 'react';
import { FaBolt, FaLevelUpAlt, FaMedal, FaTrophy } from 'react-icons/fa';
import { GiTwoCoins, GiLockedChest } from 'react-icons/gi';
import {
  AreaFight,
  GamePve,
  Map,
  GamePveArea,
  InfoPve,
  Buttons,
  NameDiv,
  FinalFight,
  LoadBattle,
  LoadBattle2,
  AreaInfo,
  Skills,
  Custon,
} from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { get } from 'lodash';
import axios from '../../../services/axios';
import { toast } from 'react-toastify';
import * as actions from '../../../store/modules/auth/actions';
import { battle, getRandom } from '../../../components/Functions/functions';
import Swal from 'sweetalert2';

export default function Pve() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const player = useSelector((state) => state.auth.status);
  const equips = useSelector((state) => state.auth.equiped);
  const fragments = useSelector((state) => state.auth.fragments);

  const [stage, setStage] = React.useState(0);
  const [enemysPve, setEnemysPve] = React.useState([]);
  const [enemyS, setEnemyS] = React.useState({});
  const [enemyA, setEnemyA] = React.useState({});
  const [enemyB, setEnemyB] = React.useState({});
  const [enemyC, setEnemyC] = React.useState({});
  const [enemyD, setEnemyD] = React.useState({});
  const [stageEnemy, setStageEnemy] = React.useState({});
  const [playerData, setPlayerData] = React.useState({});
  const [itens, setItens] = React.useState({});
  const [allItems, setAllItems] = React.useState([]);
  const [rewardItem, setRewardItem] = React.useState(false);

  function sortPveEnemys(enemyArray) {
    const enemyArrayS = [];
    const enemyArrayA = [];
    const enemyArrayB = [];
    const enemyArrayC = [];
    const enemyArrayD = [];

    enemyArray.map((enemy) => {
      if (enemy.ranking === 'S') {
        enemyArrayS.push(enemy);
      }
      if (enemy.ranking === 'A') {
        enemyArrayA.push(enemy);
      }
      if (enemy.ranking === 'B') {
        enemyArrayB.push(enemy);
      }
      if (enemy.ranking === 'C') {
        enemyArrayC.push(enemy);
      }
      if (enemy.ranking === 'D') {
        enemyArrayD.push(enemy);
      }

      const _enemyS =
        enemyArrayS[Math.floor(Math.random() * enemyArrayS.length)];
      setEnemyS(_enemyS);
      const _enemyA =
        enemyArrayA[Math.floor(Math.random() * enemyArrayA.length)];
      setEnemyA(_enemyA);
      const _enemyB =
        enemyArrayB[Math.floor(Math.random() * enemyArrayB.length)];
      setEnemyB(_enemyB);
      const _enemyC =
        enemyArrayC[Math.floor(Math.random() * enemyArrayC.length)];
      setEnemyC(_enemyC);
      const _enemyD =
        enemyArrayD[Math.floor(Math.random() * enemyArrayD.length)];
      setEnemyD(_enemyD);
    });
  }

  React.useEffect(() => {
    async function getPve() {
      try {
        const { data } = await axios.get(`/pve/`);

        setEnemysPve(data);

        sortPveEnemys(data);
      } catch (e) {
        const status = get(e, 'response.status', 0);
        const errors = get(e, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
      }
    }

    setItens(equips);
    setPlayerData({ ...player });
    getPve();

    async function getAllInventary() {
      const score = await axios.get('/inventario/');
      const data = score.data;

      setAllItems(data);
    }

    getAllInventary();
  }, []);

  const handleSubmit = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Sem energia!',
    });
  };

  const energyCoast = (e) => {
    sortPveEnemys(enemysPve);
    dispatch(
      actions.energyRecall2({
        id: player.id,
        energy: player.energy - e,
      }),
    );
  };

  if (stage === 0) {
    return (
      <GamePve>
        <div>
          <h2 className="title">PVE</h2>
        </div>
        <Map>
          <div className="class1 effect" onClick={() => setStage(1)}>
            <span>RANK S</span>
          </div>
          <div className="class2 effect" onClick={() => setStage(2)}>
            RANK A
          </div>
          <div className="class3 effect" onClick={() => setStage(3)}>
            RANK B
          </div>
          <div className="class4 effect" onClick={() => setStage(4)}>
            RANK C
          </div>
          <div className="class5 effect" onClick={() => setStage(5)}>
            RANK D
          </div>
          <div className="class6">BOSS</div>
          <div className="class6">HISTORY</div>
          <div className="class8 effect">YÕKAIS</div>
        </Map>
      </GamePve>
    );
  }

  if (stage === 1) {
    const imageName = `../img/${enemyS.nome}.png`;
    return (
      <GamePveArea>
        <AreaFight>
          <InfoPve>
            <AreaInfo>
              <NameDiv>SAMURAI</NameDiv>
              <div className="nome">
                Inimigo: <span>{enemyS.nome}</span>
              </div>
              <Skills>
                <div className="level">
                  Ranking: {enemyS.ranking}
                  <FaMedal className="icons" color="gold" />
                </div>
                <div></div>
                <div className="str">
                  <span>Força:</span> <span>{enemyS.strength}</span>
                </div>
                <div className="dex">
                  <span>destreza: </span>
                  <span>{enemyS.dexterity}</span>
                </div>
                <div className="int">
                  <span>Inteligencia: </span>
                  <span>{enemyS.intelligence}</span>
                </div>
                <div className="luc">
                  <span>Sorte: </span>
                  <span>{enemyS.luck}</span>
                </div>
              </Skills>
            </AreaInfo>
            <AreaInfo>
              <NameDiv>RECOMPENSAS</NameDiv>
              <Skills>
                <div className="ouro">
                  Ouro: ~{enemyS.gold}g
                  <GiTwoCoins className="icons" />
                </div>
                <div className="level">
                  Exp: ~{enemyS.xp}xp <FaLevelUpAlt className="icons" />
                </div>
                <div className="reputacao">
                  Rep: ~{enemyS.reputacao}Pts
                  <FaTrophy className="icons" />
                </div>
                <div className="ouro">
                  Item: 5%
                  <GiLockedChest className="icons" />
                </div>
              </Skills>
            </AreaInfo>
          </InfoPve>
          <InfoPve className="reverse">
            <img className="imageEnemy" src={imageName} />
          </InfoPve>
          <Buttons className="box3">
            <button onClick={() => setStage(0)}>Voltar</button>
            <button
              onClick={() => {
                if (player.energy < enemyS.energy) {
                  handleSubmit();
                  return;
                } else {
                  setStageEnemy(enemyS);
                  setStage(10);
                }
              }}
            >
              <div>Lutar: -{enemyS.energy}</div>
              <FaBolt color="yellow" className="icons" size="20" />
            </button>
            <button
              onClick={() => {
                if (player.energy < 3) {
                  handleSubmit();
                  return;
                } else {
                  energyCoast(3);
                }
              }}
            >
              <div>Atualizar -3</div>
              <FaBolt color="yellow" className="icons" size="20" />
            </button>
          </Buttons>
        </AreaFight>
      </GamePveArea>
    );
  }
  if (stage === 2) {
    const imageName = `../img/${enemyA.nome}.png`;
    return (
      <GamePveArea>
        <AreaFight>
          <InfoPve>
            <AreaInfo>
              <NameDiv>SAMURAI</NameDiv>
              <div className="nome">
                Inimigo: <span>{enemyA.nome}</span>
              </div>
              <Skills>
                <div className="level">
                  Ranking: {enemyA.ranking}
                  <FaMedal className="icons" color="gold" />
                </div>
                <div></div>
                <div className="str">
                  <span>Força:</span> <span>{enemyA.strength}</span>
                </div>
                <div className="dex">
                  <span>destreza: </span>
                  <span>{enemyA.dexterity}</span>
                </div>
                <div className="int">
                  <span>Inteligencia: </span>
                  <span>{enemyA.intelligence}</span>
                </div>
                <div className="luc">
                  <span>Sorte: </span>
                  <span>{enemyA.luck}</span>
                </div>
              </Skills>
            </AreaInfo>
            <AreaInfo>
              <NameDiv>RECOMPENSAS</NameDiv>
              <Skills>
                <div className="ouro">
                  Ouro: ~{enemyA.gold}g
                  <GiTwoCoins className="icons" />
                </div>
                <div className="level">
                  Exp: ~{enemyA.xp}xp <FaLevelUpAlt className="icons" />
                </div>
                <div className="reputacao">
                  Rep: ~{enemyA.reputacao}Pts
                  <FaTrophy className="icons" />
                </div>
                <div className="ouro">
                  Item: 3%
                  <GiLockedChest className="icons" />
                </div>
              </Skills>
            </AreaInfo>
          </InfoPve>
          <InfoPve className="reverse">
            <img className="imageEnemy" src={imageName} />
          </InfoPve>
          <Buttons className="box3">
            <button onClick={() => setStage(0)}>Voltar</button>
            <button
              onClick={() => {
                if (player.energy < enemyA.energy) {
                  handleSubmit();
                  return;
                } else {
                  setStageEnemy(enemyA);
                  setStage(10);
                }
              }}
            >
              <div>Lutar: -{enemyA.energy}</div>
              <FaBolt color="yellow" className="icons" size="20" />
            </button>
            <button
              onClick={() => {
                if (player.energy < 3) {
                  handleSubmit();
                  return;
                } else {
                  energyCoast(3);
                }
              }}
            >
              <div>Atualizar -3</div>
              <FaBolt color="yellow" className="icons" size="20" />
            </button>
          </Buttons>
        </AreaFight>
      </GamePveArea>
    );
  }
  if (stage === 3) {
    const imageName = `../img/${enemyB.nome}.png`;
    return (
      <GamePveArea>
        <AreaFight>
          <InfoPve>
            <AreaInfo>
              <NameDiv>SAMURAI</NameDiv>
              <div className="nome">
                Inimigo: <span>{enemyB.nome}</span>
              </div>
              <Skills>
                <div className="level">
                  Ranking: {enemyB.ranking}
                  <FaMedal className="icons" color="gold" />
                </div>
                <div></div>
                <div className="str">
                  <span>Força:</span> <span>{enemyB.strength}</span>
                </div>
                <div className="dex">
                  <span>destreza: </span>
                  <span>{enemyB.dexterity}</span>
                </div>
                <div className="int">
                  <span>Inteligencia: </span>
                  <span>{enemyB.intelligence}</span>
                </div>
                <div className="luc">
                  <span>Sorte: </span>
                  <span>{enemyB.luck}</span>
                </div>
              </Skills>
            </AreaInfo>
            <AreaInfo>
              <NameDiv>RECOMPENSAS</NameDiv>
              <Skills>
                <div className="ouro">
                  Ouro: ~{enemyB.gold}g
                  <GiTwoCoins className="icons" />
                </div>
                <div className="level">
                  Expa: ~{enemyB.xp}xp <FaLevelUpAlt className="icons" />
                </div>
                <div className="reputacao">
                  Rep: ~{enemyB.reputacao}Pts
                  <FaTrophy className="icons" />
                </div>
                <div className="ouro">
                  Item: 2%
                  <GiLockedChest className="icons" />
                </div>
              </Skills>
            </AreaInfo>
          </InfoPve>
          <InfoPve className="reverse">
            <img className="imageEnemy" src={imageName} />
          </InfoPve>
          <Buttons className="box3">
            <button onClick={() => setStage(0)}>Voltar</button>
            <button
              onClick={() => {
                if (player.energy < enemyB.energy) {
                  handleSubmit();
                  return;
                } else {
                  setStageEnemy(enemyB);
                  setStage(10);
                }
              }}
            >
              <div>Lutar: -{enemyB.energy}</div>
              <FaBolt color="yellow" className="icons" size="20" />
            </button>
            <button
              onClick={() => {
                if (player.energy < 3) {
                  handleSubmit();
                  return;
                } else {
                  energyCoast(3);
                }
              }}
            >
              <div>Atualizar -3</div>
              <FaBolt color="yellow" className="icons" size="20" />
            </button>
          </Buttons>
        </AreaFight>
      </GamePveArea>
    );
  }
  if (stage === 4) {
    const imageName = `../img/${enemyC.nome}.png`;
    return (
      <GamePveArea>
        <AreaFight>
          <InfoPve>
            <AreaInfo>
              <NameDiv>SAMURAI</NameDiv>
              <div className="nome">
                Inimigo: <span>{enemyC.nome}</span>
              </div>
              <Skills>
                <div className="level">
                  Ranking: {enemyC.ranking}
                  <FaMedal className="icons" color="gold" />
                </div>
                <div></div>
                <div className="str">
                  <span>Força:</span> <span>{enemyC.strength}</span>
                </div>
                <div className="dex">
                  <span>destreza: </span>
                  <span>{enemyC.dexterity}</span>
                </div>
                <div className="int">
                  <span>Inteligencia: </span>
                  <span>{enemyC.intelligence}</span>
                </div>
                <div className="luc">
                  <span>Sorte: </span>
                  <span>{enemyC.luck}</span>
                </div>
              </Skills>
            </AreaInfo>
            <AreaInfo>
              <NameDiv>RECOMPENSAS</NameDiv>
              <Skills>
                <div className="ouro">
                  Ouro: ~{enemyC.gold}g
                  <GiTwoCoins className="icons" />
                </div>
                <div className="level">
                  Exp: ~{enemyC.xp}xp <FaLevelUpAlt className="icons" />
                </div>
                <div className="reputacao">
                  Rep: ~{enemyC.reputacao}Pts
                  <FaTrophy className="icons" />
                </div>
                <div className="ouro">
                  Item: 1%
                  <GiLockedChest className="icons" />
                </div>
              </Skills>
            </AreaInfo>
          </InfoPve>
          <InfoPve className="reverse">
            <img className="imageEnemy" src={imageName} />
          </InfoPve>
          <Buttons className="box3">
            <button onClick={() => setStage(0)}>Voltar</button>
            <button
              onClick={() => {
                if (player.energy < enemyC.energy) {
                  handleSubmit();
                  return;
                } else {
                  setStageEnemy(enemyC);
                  setStage(10);
                }
              }}
            >
              <div>Lutar: -{enemyC.energy}</div>
              <FaBolt color="yellow" className="icons" size="20" />
            </button>

            <button
              onClick={() => {
                if (player.energy < 3) {
                  handleSubmit();
                  return;
                } else {
                  energyCoast(3);
                }
              }}
            >
              <div>Atualizar -3</div>
              <FaBolt color="yellow" className="icons" size="20" />
            </button>
          </Buttons>
        </AreaFight>
      </GamePveArea>
    );
  }
  if (stage === 5) {
    const imageName = `../img/${enemyD.nome}.png`;
    return (
      <GamePveArea>
        <AreaFight>
          <InfoPve>
            <AreaInfo>
              <NameDiv>SAMURAI</NameDiv>
              <div className="nome">
                Inimigo: <span>{enemyD.nome}</span>
              </div>
              <Skills>
                <div className="level">
                  Ranking: {enemyD.ranking}
                  <FaMedal className="icons" color="gold" />
                </div>
                <div></div>
                <div className="str">
                  <span>Força:</span> <span>{enemyD.strength}</span>
                </div>
                <div className="dex">
                  <span>destreza: </span>
                  <span>{enemyD.dexterity}</span>
                </div>
                <div className="int">
                  <span>Inteligencia: </span>
                  <span>{enemyD.intelligence}</span>
                </div>
                <div className="luc">
                  <span>Sorte: </span>
                  <span>{enemyD.luck}</span>
                </div>
              </Skills>
            </AreaInfo>
            <AreaInfo>
              <NameDiv>RECOMPENSAS</NameDiv>
              <Skills>
                <div className="ouro">
                  Ouro: ~{enemyD.gold}g
                  <GiTwoCoins className="icons" />
                </div>
                <div className="level">
                  Exp: ~{enemyD.xp}xp <FaLevelUpAlt className="icons" />
                </div>
                <div className="reputacao">
                  Rep: ~{enemyD.reputacao}Pts
                  <FaTrophy className="icons" />
                </div>
                <div className="ouro">
                  Item: 0.5%
                  <GiLockedChest className="icons" />
                </div>
              </Skills>
            </AreaInfo>
          </InfoPve>
          <InfoPve className="reverse">
            <img className="imageEnemy" src={imageName} />
          </InfoPve>
          <Buttons className="box3">
            <button onClick={() => setStage(0)}>Voltar</button>
            <button
              onClick={() => {
                if (player.energy < enemyD.energy) {
                  handleSubmit();
                  return;
                } else {
                  setStageEnemy(enemyD);
                  setStage(10);
                }
              }}
            >
              <div>Lutar: -{enemyD.energy}</div>
              <FaBolt color="yellow" className="icons" size="20" />
            </button>
            <button
              onClick={() => {
                if (player.energy < 3) {
                  handleSubmit();
                  return;
                } else {
                  energyCoast(3);
                }
              }}
            >
              <div>Atualizar -3</div>
              <FaBolt color="yellow" className="icons" size="20" />
            </button>
          </Buttons>
        </AreaFight>
      </GamePveArea>
    );
  }
  if (stage === 10) {
    const arrayItemsContain = [];
    allItems.map((item) => arrayItemsContain.push(item.id));

    const random1 = getRandom(1, 4);
    const random2 = getRandom(1, 4);
    const random3 = getRandom(1, 4);
    const random4 = getRandom(1, 1001); //Random Chance Item;
    const random5 = getRandom(0, playerData.luck); //Calculo Luck
    const random6 = getRandom(1, 100); //Random Chance Fragment;

    let goldBonus = random5 / 2;
    if (goldBonus > stageEnemy.gold) {
      goldBonus = stageEnemy.gold;
    }

    let xpBonus = random5 / 2;
    if (xpBonus > stageEnemy.xp) {
      xpBonus = stageEnemy.xp;
    }

    let reputacaoBonus = random5 / 2;
    if (reputacaoBonus > stageEnemy.reputacao) {
      reputacaoBonus = stageEnemy.reputacao;
    }

    const goldRecepter = Math.floor(stageEnemy.gold + goldBonus);
    const xpRecepter = Math.floor(stageEnemy.xp + xpBonus);
    const reputacaoRecepter = Math.floor(stageEnemy.reputacao + reputacaoBonus);

    const battle1 = battle(
      random1,
      { ...player },
      { ...stageEnemy },
      { ...itens },
    );
    const battle2 = battle(
      random2,
      { ...player },
      { ...stageEnemy },
      { ...itens },
    );
    const battle3 = battle(
      random3,
      { ...player },
      { ...stageEnemy },
      { ...itens },
    );

    const vitoria1 = battle1.vitoria;
    const vitoria2 = battle2.vitoria;
    const vitoria3 = battle3.vitoria;
    const vitoriaSymb =
      battle1.vitoriaSymbol + battle2.vitoriaSymbol + battle3.vitoriaSymbol;

    let victory = false;

    if (vitoriaSymb > 0) {
      victory = true;

      dispatch(
        actions.rewardRequest({
          gold: playerData.gold + goldRecepter,
          reputacao: playerData.reputacao + reputacaoRecepter,
          xp: playerData.xp + xpRecepter,
          id: playerData.id,
          strength: playerData.strength,
          dexterity: playerData.dexterity,
          intelligence: playerData.intelligence,
          luck: playerData.luck,
          hp: playerData.hp,
          energy: playerData.energy - stageEnemy.energy,
          level: playerData.level,
          victorypvp: playerData.victorypvp,
        }),
      );
      toast.success('Você venceu!');

      if (stageEnemy.ranking === 'D' && random4 <= 5) {
        const arrayD = allItems.filter((itens) => itens.tier === 'D');
        let itemSort = getRandom(0, Number(arrayD.length)); //Random id item;

        let id = arrayD[itemSort].id;
        setRewardItem(true);

        dispatch(
          actions.itemRequest({
            id: id,
          }),
        );
      }
      if (stageEnemy.ranking === 'C' && random4 <= 10) {
        const arrayCD = allItems.filter(
          (itens) => itens.tier === 'D' || itens.tier === 'C',
        );
        console.log(arrayCD);
        let itemSort = getRandom(0, Number(arrayCD.length)); //Random id item;

        let id = arrayCD[itemSort].id;
        setRewardItem(true);

        dispatch(
          actions.itemRequest({
            id: id,
          }),
        );
      }
      if (stageEnemy.ranking === 'B' && random4 <= 20) {
        const arrayBCD = allItems.filter(
          (itens) =>
            itens.tier === 'D' || itens.tier === 'C' || itens.tier === 'B',
        );
        console.log(arrayBCD);
        let itemSort = getRandom(0, Number(arrayBCD.length)); //Random id item;
        setRewardItem(true);
        let id = arrayBCD[itemSort].id;

        dispatch(
          actions.itemRequest({
            id: id,
          }),
        );
      }
      if (stageEnemy.ranking === 'A' && random4 <= 30) {
        const arrayABCD = allItems.filter((itens) => itens.tier !== 'S');
        let itemSort = getRandom(0, Number(arrayABCD.length)); //Random id item;
        console.log(arrayABCD);
        let id = arrayABCD[itemSort].id;
        setRewardItem(true);

        dispatch(
          actions.itemRequest({
            id: id,
          }),
        );
      }
      if (stageEnemy.ranking === 'S' && random4 <= 50) {
        const arrayAll = [...allItems];
        let itemSort = getRandom(0, Number(arrayAll.length)); //Random id item;

        let id = arrayAll[itemSort].id;
        setRewardItem(true);

        dispatch(
          actions.itemRequest({
            id: id,
          }),
        );
      }

      if (random6 < 10) {
        dispatch(
          actions.requestFragments({
            waterfragment: fragments.waterfragment + stageEnemy.water_fragment,
            airfragment: fragments.airfragment + stageEnemy.air_fragment,
            firefragment: fragments.firefragment + stageEnemy.fire_fragment,
            earthfragment: fragments.earthfragment + stageEnemy.earth_fragment,
          }),
        );
      }
    } else {
      victory = false;

      dispatch(
        actions.rewardRequest({
          gold: playerData.gold,
          reputacao: playerData.reputacao,
          xp: playerData.xp,
          id: playerData.id,
          strength: playerData.strength,
          dexterity: playerData.dexterity,
          intelligence: playerData.intelligence,
          luck: playerData.luck,
          hp: playerData.hp,
          energy: playerData.energy - stageEnemy.energy,
          level: playerData.level,
          victorypvp: playerData.victorypvp,
        }),
      );

      toast.warning('Você perdeu!');
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
            <div>Ataque do Pve: {battle1.ataquePowerPve}</div>
            <div className="result">Resultado: {vitoria1}</div>
            <div></div>
          </LoadBattle>

          <Custon>
            <h3>COMBATE 2!</h3>
            <div>{battle2.result}</div>
          </Custon>
          <LoadBattle>
            <div>Ataque do Jogador: {battle2.ataquePowerPlayer}</div>
            <div>Ataque do Pve: {battle2.ataquePowerPve}</div>
            <div className="result">Resultado: {vitoria2}</div>
          </LoadBattle>

          <Custon>
            <h3>COMBATE 3!</h3>
            <div>{battle3.result}</div>
          </Custon>
          <LoadBattle>
            <div>Ataque do Jogador: {battle3.ataquePowerPlayer}</div>
            <div>Ataque do Pve: {battle3.ataquePowerPve}</div>
            <div className="result">Resultado: {vitoria3}</div>
          </LoadBattle>
          {victory ? (
            <div>
              <Custon>
                <h3>RECOMPENSAS</h3>
              </Custon>
              <LoadBattle2>
                <div>Ouro: {goldRecepter}</div>
                <div>Reputação:{reputacaoRecepter}</div>
                <div>Xp:{xpRecepter}</div>
                <div>
                  Item:
                  {rewardItem ? ' Você ganhou um item.' : ' Não ganhou item'}
                </div>
              </LoadBattle2>
            </div>
          ) : (
            <div>
              <Custon>
                <h3>DERROTA!</h3>
              </Custon>
              <LoadBattle2>
                <div>Ouro: 0</div>
                <div>Reputação: 0</div>
                <div>Xp: 0</div>
                <div>
                  Item:
                  {rewardItem ? ' Você ganhou um item.' : ' Não ganhou item'}
                </div>
              </LoadBattle2>
            </div>
          )}

          <button onClick={() => navigate('/game')}>VOLTAR</button>
        </FinalFight>
      </GamePveArea>
    );
  }
}
