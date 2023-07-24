import React from 'react';
import { FaBolt } from 'react-icons/fa';
import {
  GiKatana,
  GiNinjaArmor,
  GiSamuraiHelmet,
  GiNecklace,
} from 'react-icons/gi';
import {
  AreaFight,
  GamePve,
  Map,
  InfoPve,
  Buttons,
  Imagem,
  FinalFight,
  LoadBattle,
  Skills,
  AreaInfo,
  Item,
  NameDiv,
  GamePveArea,
  Custon,
} from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { get } from 'lodash';
import axios from '../../../services/axios';
import { toast } from 'react-toastify';
import * as actions from '../../../store/modules/auth/actions';
import Swal from 'sweetalert2';
import { battle } from '../../../components/Functions/functions';

export default function Pvp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const player = useSelector((state) => state.auth.status);
  const equiped = useSelector((state) => state.auth.equiped);

  const [stage, setStage] = React.useState(0);
  const [enemyPvp, setEnemyPvp] = React.useState({});
  const [enemysPvp, setEnemysPvp] = React.useState([]);
  const [stageEnemy, setStageEnemy] = React.useState({});
  const [playerData, setPlayerData] = React.useState({});

  function sortPvpEnemys(enemyArray) {
    let _enemyPvp = enemyArray[Math.floor(Math.random() * enemyArray.length)];
    let attempts = 0;
    let margem = 2;

    while (
      player.level - margem > _enemyPvp.level ||
      _enemyPvp.id === player.id
    ) {
      _enemyPvp = enemyArray[Math.floor(Math.random() * enemyArray.length)];

      attempts++;

      if (attempts > 10) {
        console.log(margem);
        margem++;
      }
    }

    setEnemyPvp(_enemyPvp);
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  React.useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`/users/`);

        sortPvpEnemys(data);
        setEnemysPvp(data);
      } catch (e) {
        const status = get(e, 'response.status', 0);
        const errors = get(e, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
      }
    }

    setPlayerData({ ...player });
    getData();
  }, []);

  const handleSubmit = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você está sem energia!',
    });
  };

  const energyCoast = () => {
    sortPvpEnemys(enemysPvp);
    dispatch(
      actions.energyRecall2({
        id: player.id,
        energy: player.energy - 3,
      }),
    );
  };

  if (stage === 0) {
    return (
      <GamePve>
        <div>
          <h2 className="title">PVP</h2>
        </div>
        <div className="backgroundF">
          <NameDiv>
            <h3>SINGLE BATTLE</h3>
            <p>Batalhas valendo ouro e reputação.</p>
          </NameDiv>
          <Map>
            <div className="class1 effect" onClick={() => setStage(1)}>
              PVP RANDOM
            </div>
            <div className="class2">SEARCH ENEMY</div>
          </Map>
          <NameDiv>
            <h3>DOMINAÇÃO (LEVEL 10+)</h3>
            <p>Batalhas arriscando a vida.</p>
          </NameDiv>
          <Map>
            <div className="class2">DOMINAÇÃO</div>
            <div className="class2">???</div>
          </Map>
        </div>
      </GamePve>
    );
  }

  if (stage === 1) {
    const imageName = `../img/exemplo.png`;
    return (
      <GamePve>
        <AreaFight>
          <InfoPve>
            <AreaInfo>
              <Imagem className="reverse">
                <img className="imageEnemy" src={imageName} />
              </Imagem>
              <AreaInfo>
                <NameDiv>Recompensas</NameDiv>
                <Skills>
                  <div className="gold">
                    <span>Ouro:</span>{' '}
                    <span>+{Math.floor(enemyPvp.gold / 5)}</span>
                  </div>
                  <div className="vitoria">
                    <span>Vitórias Pvp:</span> <span>+1</span>
                  </div>
                  <div className="level">
                    <span>Exp:</span>{' '}
                    <span>+{Math.floor(enemyPvp.level * 5)}</span>
                  </div>
                  <div className="level">
                    <span>Reputacão:</span>{' '}
                    <span>+{Math.floor(enemyPvp.reputacao / 10)}</span>
                  </div>
                </Skills>
              </AreaInfo>
            </AreaInfo>
          </InfoPve>
          <InfoPve>
            <AreaInfo>
              <NameDiv>Informações</NameDiv>
              <div className="nome">
                Nome: <span>{enemyPvp.nome}</span>
              </div>
              <Skills>
                <div className="level">
                  <span>Level:</span> <span>{enemyPvp.level}</span>
                </div>
                <div className="vitoria">
                  <span>Vitórias Pvp:</span>
                  <span>{enemyPvp.victorypvp}</span>
                </div>
                <div className="str">
                  <span>Força:</span> <span>{enemyPvp.strength}</span>
                </div>
                <div className="dex">
                  <span>destreza: </span>
                  <span>{enemyPvp.dexterity}</span>
                </div>
                <div className="int">
                  <span>Inteligencia: </span>
                  <span>{enemyPvp.intelligence}</span>
                </div>
                <div className="luc">
                  <span>Sorte: </span>
                  <span>{enemyPvp.luck}</span>
                </div>
              </Skills>
            </AreaInfo>
            <AreaInfo>
              <Item>
                <div className="espada">
                  Espada:{' '}
                  <span>
                    {enemyPvp.equiped_sword || ''}
                    {enemyPvp.equiped_sword
                      ? ` (Ata.: ${enemyPvp.equiped_sword_atr1} * Vel.: ${enemyPvp.equiped_sword_atr2})`
                      : ' '}
                  </span>
                  <GiKatana className="icons" />
                </div>
                <div className="armadura">
                  Armadura:{' '}
                  <span>
                    {enemyPvp.equiped_armor || ''}
                    {enemyPvp.equiped_armor
                      ? `(Def.: ${enemyPvp.equiped_armor_atr1} * Res.: ${enemyPvp.equiped_armor_atr2})`
                      : ' '}
                  </span>
                  <GiNinjaArmor className="icons" />
                </div>
                <div className="elmo">
                  Elmo:{' '}
                  <span>
                    {enemyPvp.equiped_helmet || ''}
                    {enemyPvp.equiped_helmet
                      ? ` (Def.: ${enemyPvp.equiped_helmet_atr1} * Vis.: ${enemyPvp.equiped_helmet_atr2})`
                      : ' '}
                  </span>
                  <GiSamuraiHelmet className="icons" />
                </div>
                {/* <div className="luva">
                  Luva:{' '}
                  <span>
                    {enemyPvp.equiped_glove || ''}
                    {enemyPvp.equiped_glove
                      ? ` (Def: ${enemyPvp.equiped_glove_atr1} * Vel: ${enemyPvp.equiped_glove_atr2})`
                      : ' '}
                  </span>
                  <GiGloves className="icons" />
                </div> */}
                <div className="amuleto">
                  Amuleto:{' '}
                  <span>
                    {enemyPvp.equiped_amulet || ''}
                    {enemyPvp.equiped_amulet
                      ? ` (Sab.: ${enemyPvp.equiped_amulet_atr1} * Fé: ${enemyPvp.equiped_amulet_atr2})`
                      : ' '}
                  </span>
                  <GiNecklace className="icons" />
                </div>
              </Item>
            </AreaInfo>
          </InfoPve>
          <Buttons className="box3">
            <button onClick={() => setStage(0)}>VOLTAR</button>
            <button
              onClick={() => {
                if (player.energy < 5) {
                  handleSubmit();
                  return;
                } else {
                  setStageEnemy(enemyPvp);
                  setStage(10);
                }
              }}
            >
              <div>LUTAR -5</div>
              <FaBolt color="yellow" className="icons" size="20" />
            </button>

            <button
              onClick={() => {
                if (player.energy < 3) {
                  handleSubmit();
                  return;
                } else {
                  energyCoast();
                }
              }}
            >
              <div>Atualizar -3</div>
              <FaBolt color="yellow" className="icons" size="20" />
            </button>
          </Buttons>
        </AreaFight>
      </GamePve>
    );
  }

  if (stage === 10) {
    const random1 = getRandom(1, 4);
    const random2 = getRandom(1, 4);
    const random3 = getRandom(1, 4);
    const battle1 = battle(
      random1,
      { ...player },
      { ...stageEnemy },
      { ...equiped },
    );
    console.log(player, stageEnemy);
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
    const vitoriaSymb =
      battle1.vitoriaSymbol + battle2.vitoriaSymbol + battle3.vitoriaSymbol;

    let victory = false;

    if (vitoriaSymb > 0) {
      victory = true;

      dispatch(
        actions.rewardRequest({
          gold: playerData.gold + Math.floor(enemyPvp.gold / 5),
          reputacao: playerData.reputacao + Math.floor(enemyPvp.reputacao / 10),
          xp: playerData.xp + Math.floor(enemyPvp.level * 5),
          id: playerData.id,
          strength: playerData.strength,
          dexterity: playerData.dexterity,
          intelligence: playerData.intelligence,
          luck: playerData.luck,
          hp: playerData.hp,
          energy: playerData.energy - 5,
          level: playerData.level,
          victorypvp: playerData.victorypvp + 1,
        }),
      );

      dispatch(
        actions.payQuest({
          gold: enemyPvp.gold - Math.floor(enemyPvp.gold / 5),
          reputacao: enemyPvp.reputacao - Math.floor(enemyPvp.reputacao / 10),
          xp: enemyPvp.xp,
          id: enemyPvp.id,
          victorypvp: enemyPvp.victorypvp,
        }),
      );
      toast.success('Você venceu!');
    } else {
      victory = false;

      dispatch(
        actions.rewardRequest({
          gold: playerData.gold,
          reputacao:
            playerData.reputacao - Math.floor(playerData.reputacao / 10),
          xp: playerData.xp,
          id: playerData.id,
          strength: playerData.strength,
          dexterity: playerData.dexterity,
          intelligence: playerData.intelligence,
          luck: playerData.luck,
          hp: playerData.hp,
          energy: playerData.energy - 5,
          level: playerData.level,
          victorypvp: playerData.victorypvp,
        }),
      );
      toast.warning('Você perder!');
      dispatch(
        actions.payQuest({
          gold: enemyPvp.gold,
          reputacao: enemyPvp.reputacao + Math.floor(playerData.reputacao / 10),
          xp: enemyPvp.xp,
          id: enemyPvp.id,
          victorypvp: enemyPvp.victorypvp + 1,
          firefragment: enemyPvp.fire_fragment,
          earthfragment: enemyPvp.earth_fragment,
          waterfragment: enemyPvp.water_fragment,
          airfragment: enemyPvp.air_fragment,
        }),
      );
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
              <LoadBattle>
                <div>Ouro: +{Math.floor(stageEnemy.gold / 5)}</div>
                <div>Reputação: +{Math.floor(stageEnemy.reputacao / 10)}</div>
                <div>Xp: +{stageEnemy.level * 10}</div>
              </LoadBattle>
            </div>
          ) : (
            <div>
              <Custon>
                <h3>DERROTA</h3>
              </Custon>
              <LoadBattle>
                <div>Ouro: 0</div>
                <div>Reputação: x</div>
                <div>Xp: 0</div>
              </LoadBattle>
            </div>
          )}

          <button onClick={() => navigate('/game')}>VOLTAR</button>
        </FinalFight>
      </GamePveArea>
    );
  }
}
