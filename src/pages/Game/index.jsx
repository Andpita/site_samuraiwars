import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import {
  GameDown,
  GameMid,
  GameWindow,
  Status,
  Status2,
  Itens,
  ImageArea,
  Increment,
  DataAttributes,
  AreaFixa,
  Atributtes,
  ImagenRecept,
} from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { FaPlus } from 'react-icons/fa';
import { BsDropletFill } from 'react-icons/bs';
import * as actions from '../../store/modules/auth/actions';
import { calcCoast, lvlUp } from '../../components/Functions/functions';
import { arrayXp } from '../../components/Data/data';

export default function Game() {
  const dispatch = useDispatch();
  const { status: player, equiped: equiped } = useSelector(
    (state) => state.auth,
  );

  const [nome, setNome] = React.useState('');
  const [strength, setStrength] = React.useState('');
  const [dexterity, setDexterity] = React.useState('');
  const [intelligence, setIntelligence] = React.useState('');
  const [luck, setLuck] = React.useState('');
  const [hp, setHp] = React.useState('');
  const [energy, setEnergy] = React.useState('');
  const [gold, setgold] = React.useState('');
  const [level, setLevel] = React.useState('');
  const [reputacao, setReputacao] = React.useState('');
  const [xp, setXp] = React.useState('');

  const [coastStr, setCoastStr] = React.useState(0);
  const [coastDex, setCoastDex] = React.useState(0);
  const [coastInt, setCoastInt] = React.useState(0);
  const [coastLuck, setCoastLuck] = React.useState(0);

  const [isShown1, setIsShown1] = React.useState(false);
  const [isShown2, setIsShown2] = React.useState(false);
  const [isShown3, setIsShown3] = React.useState(false);
  const [isShown4, setIsShown4] = React.useState(false);
  const [isShown5, setIsShown5] = React.useState(false);

  const [date, setDate] = React.useState(new Date());
  const [coastXpForNextLevel, setCaostXpForNextLevel] = React.useState(0);
  const [victoryPvp, setVictoryPvp] = React.useState(0);
  const [sword, setSword] = React.useState('');
  const [armor, setArmor] = React.useState('');
  const [helmet, setHelmet] = React.useState('');
  const [amulet, setAmulet] = React.useState('');
  const [glove, setGlove] = React.useState('');

  const [swordAtr1, setSwordAtr1] = React.useState('');
  const [armorAtr1, setArmorAtr1] = React.useState('');
  const [helmetAtr1, setHelmetAtr1] = React.useState('');
  const [amuletAtr1, setAmuletAtr1] = React.useState('');
  const [gloveAtr1, setGloveAtr1] = React.useState('');

  const [swordAtr2, setSwordAtr2] = React.useState('');
  const [armorAtr2, setArmorAtr2] = React.useState('');
  const [helmetAtr2, setHelmetAtr2] = React.useState('');
  const [amuletAtr2, setAmuletAtr2] = React.useState('');
  const [gloveAtr2, setGloveAtr2] = React.useState('');

  React.useEffect(() => {
    //DATA
    async function getData() {
      try {
        setNome(player.nome);
        setStrength(player.strength);
        setDexterity(player.dexterity);
        setIntelligence(player.intelligence);
        setEnergy(player.energy);
        setgold(player.gold);
        setHp(player.hp);
        setLuck(player.luck);
        setReputacao(player.reputacao);

        setLevel(player.level);
        setXp(player.xp);
        setCaostXpForNextLevel(arrayXp[player.level]);
        setVictoryPvp(player.victorypvp);

        setCoastStr(calcCoast(player.strength));
        setCoastDex(calcCoast(player.dexterity));
        setCoastInt(calcCoast(player.intelligence));
        setCoastLuck(calcCoast(player.luck));

        setSword(equiped.sword);
        setArmor(equiped.armor);
        setHelmet(equiped.helmet);
        setGlove(equiped.glouve);
        setAmulet(equiped.amulet);

        setSwordAtr1(equiped.swordAtr1);
        setArmorAtr1(equiped.armorAtr1);
        setHelmetAtr1(equiped.helmetAtr1);
        setAmuletAtr1(equiped.amuletAtr1);
        setGloveAtr1(equiped.gloveAtr1);

        setSwordAtr2(equiped.swordAtr2);
        setArmorAtr2(equiped.armorAtr2);
        setHelmetAtr2(equiped.helmetAtr2);
        setAmuletAtr2(equiped.amuletAtr2);
        setGloveAtr2(equiped.gloveAtr2);
      } catch (e) {
        const status = get(e, 'response.status', 0);
        const errors = get(e, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
      }
    }

    getData();

    //Timer
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [player.level]);

  if (xp > coastXpForNextLevel) {
    const infoLvl = lvlUp(level, xp, [arrayXp]);
    setLevel(infoLvl.level);
    setXp(infoLvl.xpAtual);
    setCaostXpForNextLevel(infoLvl.xpForNextLevel);

    dispatch(
      actions.updateRequest({
        strength: strength,
        intelligence: intelligence,
        dexterity: dexterity,
        gold: +gold,
        luck: luck,
        id: player.id,
        reputacao: reputacao,
        xp: infoLvl.xpAtual,
        hp: +hp,
        energy: energy,
        level: infoLvl.level,
        victorypvp: victoryPvp,
      }),
    );
  }

  function refreshClock() {
    setDate(new Date());
  }

  async function incrementValue(atributte) {
    if (atributte === 'strength') {
      if (gold < coastStr) {
        console.log('Sem dinheiro pateta!');
        return;
      }
      const atualCoast = coastStr;
      setgold(gold - atualCoast);
      setStrength(strength + 1);
      const value = calcCoast(strength + 1);
      setCoastStr(value);

      dispatch(
        actions.updateRequest({
          strength: strength + 1,
          intelligence: intelligence,
          dexterity: dexterity,
          gold: +gold - atualCoast,
          luck: luck,
          id: player.id,
          reputacao: reputacao,
          xp: +xp,
          hp: +hp,
          energy: energy,
          level: level,
          victorypvp: victoryPvp,
        }),
      );
    }

    if (atributte === 'dexterity') {
      if (gold < coastDex) {
        console.log('Sem dinheiro pateta!');
        return;
      }
      const atualCoast = coastDex;
      setgold(gold - atualCoast);
      setDexterity(dexterity + 1);
      const value = calcCoast(dexterity + 1);
      setCoastDex(value);

      dispatch(
        actions.updateRequest({
          strength: strength,
          intelligence: intelligence,
          dexterity: dexterity + 1,
          luck: luck,
          gold: +gold - atualCoast,
          id: player.id,
          reputacao: reputacao,
          xp: xp,
          hp: hp,
          energy: energy,
          level: level,
          victorypvp: victoryPvp,
        }),
      );
    }

    if (atributte === 'intelligence') {
      if (gold < coastInt) {
        console.log('Sem dinheiro pateta!');
        return;
      }
      const atualCoast = coastInt;
      setgold(gold - atualCoast);
      setIntelligence(intelligence + 1);
      const value = calcCoast(intelligence + 1);
      setCoastInt(value);

      dispatch(
        actions.updateRequest({
          strength: strength,
          intelligence: intelligence + 1,
          dexterity: dexterity,
          luck: luck,
          gold: +gold - atualCoast,
          id: player.id,
          reputacao: reputacao,
          xp: xp,
          hp: hp,
          energy: energy,
          level: level,
          victorypvp: victoryPvp,
        }),
      );
    }

    if (atributte === 'luck') {
      if (gold < coastLuck) {
        console.log('Sem dinheiro pateta!');
        return;
      }
      const atualCoast = coastLuck;
      setgold(gold - atualCoast);
      setLuck(luck + 1);
      const value = calcCoast(luck + 1);
      setCoastLuck(value);

      dispatch(
        actions.updateRequest({
          strength: strength,
          intelligence: intelligence,
          dexterity: dexterity,
          luck: luck + 1,
          gold: +gold - atualCoast,
          id: player.id,
          reputacao: reputacao,
          xp: xp,
          hp: hp,
          energy: energy,
          level: level,
          victorypvp: victoryPvp,
        }),
      );
    }
  }

  return (
    <Container>
      <GameWindow>
        <GameMid>
          <Status>
            <AreaFixa>
              <h2>STATUS</h2>
            </AreaFixa>
            <AreaFixa className="bkcolor">
              <Atributtes>
                <h3>Força:</h3>
                <div>
                  <span>{strength || '00'}</span>
                  <Increment
                    onClick={() => incrementValue('strength')}
                    className="Força"
                    onMouseEnter={() => setIsShown1(true)}
                    onMouseLeave={() => setIsShown1(false)}
                  >
                    <FaPlus fontSize={12} />
                  </Increment>
                </div>
              </Atributtes>
              {isShown1 && <div className="teste">Custa {coastStr} Golds.</div>}
            </AreaFixa>

            <AreaFixa className="bkcolor">
              <Atributtes>
                <h3>Destreza: </h3>
                <div>
                  <span>{dexterity || '00'}</span>
                  <Increment
                    onClick={() => incrementValue('dexterity')}
                    className="Força"
                    onMouseEnter={() => setIsShown2(true)}
                    onMouseLeave={() => setIsShown2(false)}
                  >
                    <FaPlus fontSize={12} />
                  </Increment>
                </div>
              </Atributtes>
              {isShown2 && <div className="teste">Custa {coastDex} Golds</div>}
            </AreaFixa>

            <AreaFixa className="bkcolor">
              <Atributtes>
                <h3>Inteligência:</h3>
                <div>
                  <span>{intelligence || '00'}</span>
                  <Increment
                    onClick={() => incrementValue('intelligence')}
                    className="Força"
                    onMouseEnter={() => setIsShown3(true)}
                    onMouseLeave={() => setIsShown3(false)}
                  >
                    <FaPlus fontSize={12} />
                  </Increment>
                </div>
              </Atributtes>
              {isShown3 && <div className="teste">Custa {coastInt} Golds</div>}
            </AreaFixa>

            <AreaFixa className="bkcolor">
              <Atributtes>
                <h3>Sorte:</h3>

                <div>
                  <span>{luck || '00'}</span>
                  <Increment
                    onClick={() => incrementValue('luck')}
                    className="Força"
                    onMouseEnter={() => setIsShown4(true)}
                    onMouseLeave={() => setIsShown4(false)}
                  >
                    <FaPlus fontSize={12} />
                  </Increment>
                </div>
              </Atributtes>
              {isShown4 && <div className="teste">Custa {coastLuck} Golds</div>}
            </AreaFixa>
            <AreaFixa className="bkcolor">
              <Atributtes>
                <h3>Vida:</h3>
                <div>
                  <span>{hp || '000'}</span>
                  <Increment
                    onMouseEnter={() => setIsShown5(true)}
                    onMouseLeave={() => setIsShown5(false)}
                  >
                    <BsDropletFill fontSize={12} color="red" />
                  </Increment>
                </div>
              </Atributtes>
              {isShown5 && <div className="teste">Desenvolvendo...</div>}
            </AreaFixa>
          </Status>
          <ImageArea>
            <AreaFixa className="extramargin">
              <h2>TEMPLO</h2>
            </AreaFixa>
            <ImagenRecept>
              <img className="imageEnemy" src="./img/exemplo2.png" />
            </ImagenRecept>
          </ImageArea>
          <Itens className="grid3">
            <Status2>
              <AreaFixa>
                <h2>EQUIPAMENTOS</h2>
              </AreaFixa>

              <AreaFixa className="bkcolor">
                <h3>Espada</h3>
                <DataAttributes>
                  <span className="bold">{sword || 'Sem item'} </span>{' '}
                  <span>
                    {sword
                      ? `(Força: ${swordAtr1})
                       (Destreza: ${swordAtr2})`
                      : ''}
                  </span>
                </DataAttributes>
              </AreaFixa>
              <AreaFixa className="bkcolor">
                <h3>Armadura</h3>
                <DataAttributes>
                  <span className="bold">{armor || 'Sem item'} </span>
                  <span>
                    {armor ? `(Sorte: ${armorAtr2}) (Força: ${armorAtr1})` : ''}
                  </span>
                </DataAttributes>
              </AreaFixa>
              <AreaFixa className="bkcolor">
                <h3>Elmo</h3>
                <DataAttributes>
                  <span className="bold">{helmet || 'Sem item'} </span>
                  <span>
                    {helmet
                      ? `(Destreza: ${helmetAtr1}) (Inteligência: ${helmetAtr2})`
                      : ''}
                  </span>
                </DataAttributes>
              </AreaFixa>
              <AreaFixa className="bkcolor">
                <h3>Luvas</h3>
                <DataAttributes>
                  <span className="bold">{glove || 'Sem item'} </span>
                  <span>
                    {glove ? `Des: ${gloveAtr1} Int: ${gloveAtr2}` : ''}
                  </span>
                </DataAttributes>
              </AreaFixa>
              <AreaFixa className="bkcolor">
                <h3>Amuleto</h3>
                <DataAttributes>
                  <span className="bold">{amulet || 'Sem item'} </span>
                  <span>
                    {amulet
                      ? `(Inteligência: ${amuletAtr1}) (Sorte: ${amuletAtr2})`
                      : ''}
                  </span>
                </DataAttributes>
              </AreaFixa>
            </Status2>
          </Itens>
        </GameMid>
        <GameDown>
          <div className="branco">
            User:
            <span>{nome || 'user'}</span>
          </div>
          <div className="vermelho">
            Reputação:
            <span>{reputacao || '0'}</span>
          </div>
          <div className="gold">
            Ouro: <span>{gold}</span> moedas
          </div>
          <div className="amarelo">
            Energia: <span>{energy || '00'}</span>/<span>100</span>
          </div>
          <div className="lightblue">
            Level: <span>{`0${level}` || '00'}</span>
          </div>
          <div className="lightblue">
            XP: <span>{xp || '0'}</span>/<span>{coastXpForNextLevel}</span>
          </div>
          <div className="black">Vitórias PVP: {player.victorypvp || 0}</div>
          <div className="amarelo">{date.toLocaleTimeString()}</div>
        </GameDown>
      </GameWindow>
    </Container>
  );
}
