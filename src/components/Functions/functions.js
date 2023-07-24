/* eslint-disable prettier/prettier */
import { arrayStatus, arrayCoastUpgrade } from '../Data/data';

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function battle(randomN, { ...jogador }, { ...enemy }, { ...equiped }) {

  //Player
  const swordPlayerAtt1 = equiped.swordAtr1 || 0;
  const swordPlayerAtt2 = equiped.swordAtr2 || 0;
  const armorPlayerAtt1 = equiped.armorAtr1 || 0;
  const armorPlayerAtt2 = equiped.armorAtr2 || 0;
  const helmetPlayerAtt1 = equiped.helmetAtr1 || 0;
  const helmetPlayerAtt2 = equiped.helmetAtr2 || 0;
  //const glovePlayerAtt1 = equiped.gloveAtr1 || 0;
  //const glovePlayerAtt2 = equiped.gloveAtr2 || 0;
  const amuletPlayerAtt1 = equiped.amuletAtr1 || 0;
  const amuletPlayerAtt2 = equiped.amuletAtr2 || 0;

  //Enemy
  const swordEnemyAtt1 = enemy.equiped_sword_atr1 || 0;
  const swordEnemyAtt2 = enemy.equiped_sword_atr2 || 0;
  const armorEnemyAtt1 = enemy.equiped_armor_atr1 || 0;
  const armorEnemyAtt2 = enemy.equiped_armor_atr2 || 0;
  const helmetEnemyAtt1 = enemy.equiped_helmet_atr1 || 0;
  const helmetEnemyAtt2 = enemy.equiped_helmet_atr2 || 0;
  //const gloveEnemyAtt1 = enemy.equiped_glove_atr1 || 0;
  //const gloveEnemyAtt2 = enemy.equiped_glove_atr2 || 0;
  const amuletEnemyAtt1 = enemy.equiped_amulet_atr1 || 0;
  const amuletEnemyAtt2 = enemy.equiped_amulet_atr2 || 0;

  const forçaPlayer = jogador.strength;
  const destresaPlayer = jogador.dexterity;
  const inteligenciaPlayer = jogador.intelligence;

  const luckPlayer = Math.floor(
    jogador.luck +
    (amuletPlayerAtt2 - armorEnemyAtt2) +
    (jogador.luck * getRandom(0, 5)) / 10,
  );

  const forçaPve = enemy.strength || 0;
  const destresaPve = enemy.dexterity || 0;
  const inteligenciaPve = enemy.intelligence || 0;

  const luckPve = Math.floor(
    enemy.luck +
    (amuletEnemyAtt2 - armorPlayerAtt2) +
    (enemy.luck * getRandom(0, 5)) / 10,
  );

  let vitoria;
  let vitoriaSymbol = 0;
  let result;
  let confronto;
  let strAtributtePlayer;
  let strAtributtePve;
  let dexAtributtePlayer;
  let dexAtributtePve;
  let intAtributtePlayer;
  let intAtributtePve;

  let luckAtributtePlayer;
  let luckAtributtePve;
  let ataquePowerPlayer;
  let ataquePowerPve;

  if (randomN === 1) {
    result = 'A batalha será medida pela força;';

    strAtributtePlayer = forçaPlayer + (swordPlayerAtt1 - armorEnemyAtt1);
    strAtributtePve = forçaPve + (swordEnemyAtt1 - armorPlayerAtt1);
    console.log(strAtributtePve);

    luckAtributtePlayer = luckPlayer;
    luckAtributtePve = luckPve;
    console.log(luckAtributtePve);

    ataquePowerPlayer =
      strAtributtePlayer * 10 +
      Math.floor((strAtributtePlayer * luckAtributtePlayer) / 3);
    ataquePowerPve =
      (strAtributtePve) * 10 +
      Math.floor((strAtributtePve * luckAtributtePve) / 3);

    confronto = ataquePowerPlayer - ataquePowerPve;
  }
  if (randomN === 2) {
    result = 'A batalha será medida pela velocidade;';

    dexAtributtePlayer = destresaPlayer + (helmetPlayerAtt1 - swordEnemyAtt2);
    dexAtributtePve = destresaPve + (helmetEnemyAtt1 - swordPlayerAtt2);
    console.log(dexAtributtePve);
    luckAtributtePlayer = luckPlayer;
    luckAtributtePve = luckPve;

    ataquePowerPlayer =
      dexAtributtePlayer * 7 +
      Math.floor((luckAtributtePlayer * dexAtributtePlayer) / 2)
      ;
    ataquePowerPve =
      dexAtributtePve * 7 +
      Math.floor((luckAtributtePve * dexAtributtePve) / 2);

    confronto = ataquePowerPlayer - ataquePowerPve;
  }
  if (randomN === 3) {
    result = 'A batalha será medida pela estrategia;';

    intAtributtePlayer = inteligenciaPlayer + (amuletPlayerAtt1 - helmetEnemyAtt2);
    intAtributtePve = inteligenciaPve + (amuletEnemyAtt1 - helmetPlayerAtt2);
    luckAtributtePlayer = luckPlayer;
    luckAtributtePve = luckPve;

    ataquePowerPlayer =
      intAtributtePlayer * 5 +
      Math.floor((luckAtributtePlayer * intAtributtePlayer) / 2);
    ataquePowerPve =
      intAtributtePve * 5 +
      Math.floor((luckAtributtePve * intAtributtePve) / 2);

    confronto = ataquePowerPlayer - ataquePowerPve;
  }

  if (confronto >= 0) {
    vitoria = 'VITORIA DO JOGADOR';
    vitoriaSymbol += 1;
  } else {
    vitoria = 'VITORIA DO PVE';
    vitoriaSymbol -= 1;
  }

  return {
    result,
    confronto,
    vitoria,
    vitoriaSymbol,
    strAtributtePlayer,
    strAtributtePve,
    dexAtributtePlayer,
    dexAtributtePve,
    intAtributtePlayer,
    intAtributtePve,
    luckAtributtePlayer,
    luckAtributtePve,
    ataquePowerPlayer,
    ataquePowerPve,
  };
}

export function calcCoast(value) {
  const positionValue = arrayStatus.indexOf(value);
  const coast = arrayCoastUpgrade[positionValue];

  return coast;
}

export function lvlUp(level, xpAtual, [arrayDeXp]) {
  const xpNextLevel = arrayDeXp[level];

  if (xpAtual >= xpNextLevel) {
    const extraXp = xpAtual - xpNextLevel;

    level = level + 1;
    xpAtual = extraXp;
    const xpForNextLevel = arrayDeXp[level];

    return { level, xpAtual, xpForNextLevel };
  }
}
