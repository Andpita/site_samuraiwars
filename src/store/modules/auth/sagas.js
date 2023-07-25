import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import { get } from 'lodash';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/token', payload);

    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Você fez login');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  } catch (e) {
    toast.error('E-mail e/ou senha inválidos');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { nome, password, email, id } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        email,
        nome,
        password: password || undefined,
      });
      toast.success('Conta alterada com sucesso!');
      toast.success('Você precisa fazer login novamente.');
      yield put(actions.loginFailure());
      yield put(actions.registerSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, '/users', {
        email,
        nome,
        password,
      });
      toast.success('Conta criada com sucesso!');
      yield put(actions.registerSuccess({ nome, email, password }));
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.loginFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

function* updateRequest({ payload }) {
  const {
    gold,
    reputacao,
    xp,
    id,
    strength,
    dexterity,
    intelligence,
    luck,
    hp,
    energy,
    level,
    victorypvp,
  } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        xp: xp || 0,
        reputacao: reputacao || 0,
        gold: gold || 0,
        strength: strength || 0,
        dexterity: dexterity || 0,
        intelligence: intelligence || 0,
        luck: luck || 0,
        hp: hp || 0,
        energy: energy || 0,
        level: level || 0,
        victorypvp: victorypvp || 0,
      });
      yield put(
        actions.updateSuccess({
          xp: xp || 0,
          reputacao: reputacao || 0,
          gold: gold || 0,
          strength: strength || 0,
          dexterity: dexterity || 0,
          intelligence: intelligence || 0,
          luck: luck || 0,
          hp: hp || 0,
          energy: energy || 0,
          level: level || 0,
          victorypvp: victorypvp || 0,
        }),
      );
      toast.success('Você melhorou um status!');
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.updateFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

function* rewardRequest({ payload }) {
  const {
    gold,
    reputacao,
    xp,
    id,
    strength,
    dexterity,
    intelligence,
    luck,
    hp,
    energy,
    level,
    victorypvp,
  } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        xp: xp || 0,
        reputacao: reputacao || 0,
        gold: gold || 0,
        strength: strength || 0,
        dexterity: dexterity || 0,
        intelligence: intelligence || 0,
        luck: luck || 0,
        hp: hp || 0,
        energy: energy || 0,
        level: level || 0,
        victorypvp: victorypvp || 0,
      });
      yield put(
        actions.rewardSuccess({
          xp: xp || 0,
          reputacao: reputacao || 0,
          gold: gold || 0,
          strength: strength || 0,
          dexterity: dexterity || 0,
          intelligence: intelligence || 0,
          luck: luck || 0,
          hp: hp || 0,
          energy: energy || 0,
          level: level || 0,
          victorypvp: victorypvp || 0,
        }),
      );
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.rewardFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

function* energyRecall({ payload }) {
  try {
    const { energy, id } = payload;

    if (id) {
      yield call(axios.put, '/users', {
        energy: energy || 0,
      });
      toast.success('+1 de energia');
      yield put(
        actions.energyRecall({
          energy: energy || 0,
        }),
      );
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);
    toast.error('não funcionou');

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.rewardFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

function* energyRecall2({ payload }) {
  try {
    const { energy, id } = payload;

    if (id) {
      yield call(axios.put, '/users', {
        energy: energy || 0,
      });
      toast.error(`-${energy} de energia`);
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);
    toast.error('não funcionou');

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.rewardFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

function* goldChangeRequest({ payload }) {
  try {
    const { gold, id } = payload;

    if (id) {
      yield call(axios.put, '/users', {
        gold: gold || 0,
      });
      toast.success('Novo item no inventário');
      yield put(
        actions.goldChangeSuccess({
          gold: gold || 0,
        }),
      );
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);
    toast.error('não funcionou');

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.rewardFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

function* itemRequest({ payload }) {
  const { id } = payload;

  try {
    if (id) {
      yield call(axios.put, '/inventario', {
        itens: [id],
      });
      yield put(
        actions.itemSuccess({
          itens: [id],
        }),
      );
      toast.warning('Você achou um item!');
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);
    toast.error('não funcionou');

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.rewardFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

function* changeItens({ payload }) {
  const {
    id,
    sword,
    armor,
    helmet,
    glove,
    amulet,
    swordAtr1,
    swordAtr2,
    armorAtr1,
    armorAtr2,
    helmetAtr1,
    helmetAtr2,
    amuletAtr1,
    amuletAtr2,
    gloveAtr1,
    gloveAtr2,
  } = payload;
  console.log(payload);
  try {
    if (id) {
      yield call(axios.put, '/equiped', {
        equiped_sword: sword || undefined,
        equiped_armor: armor || undefined,
        equiped_helmet: helmet || undefined,
        equiped_amulet: amulet || undefined,
        equiped_glove: glove || undefined,

        equiped_sword_atr1: swordAtr1 || undefined,
        equiped_sword_atr2: swordAtr2 || undefined,
        equiped_armor_atr1: armorAtr1 || undefined,
        equiped_armor_atr2: armorAtr2 || undefined,
        equiped_helmet_atr1: helmetAtr1 || undefined,
        equiped_helmet_atr2: helmetAtr2 || undefined,
        equiped_amulet_atr1: amuletAtr1 || undefined,
        equiped_amulet_atr2: amuletAtr2 || undefined,
        equiped_glove_atr1: gloveAtr1 || undefined,
        equiped_glove_atr2: gloveAtr2 || undefined,
      });
      yield put(
        actions.changeItens({
          equiped_sword: sword || false,
          equiped_armor: armor || false,
          equiped_helmet: helmet || false,
          equiped_amulet: amulet || false,
          equiped_glove: glove || false,

          equiped_sword_atr1: swordAtr1 || 0,
          equiped_sword_atr2: swordAtr2 || 0,
          equiped_armor_atr1: armorAtr1 || 0,
          equiped_armor_atr2: armorAtr2 || 0,
          equiped_helmet_atr1: helmetAtr1 || 0,
          equiped_helmet_atr2: helmetAtr2 || 0,
          equiped_amulet_atr1: amuletAtr1 || 0,
          equiped_amulet_atr2: amuletAtr2 || 0,
          equiped_glove_atr1: gloveAtr1 || 0,
          equiped_glove_atr2: gloveAtr2 || 0,
        }),
      );
      toast.success('Item Equipado!');
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.updateFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

function* payQuest({ payload }) {
  const {
    id,
    gold,
    reputacao,
    hp,
    victorypvp,
    firefragment,
    earthfragment,
    waterfragment,
    airfragment,
  } = payload;
  console.log(payload);
  try {
    if (id) {
      yield call(axios.put, `/users/${id}`, {
        reputacao: reputacao || 0,
        gold: gold || 0,
        hp: hp || 0,
        victorypvp: victorypvp || 0,
        fire_fragment: firefragment || 0,
        water_fragment: waterfragment || 0,
        earth_fragment: earthfragment || 0,
        air_fragment: airfragment || 0,
      });
      yield put(
        actions.paySuccess({
          reputacao: reputacao || 0,
          gold: gold || 0,
          hp: hp || 0,
          victorypvp: victorypvp || 0,
          fire_fragment: firefragment || 0,
          water_fragment: waterfragment || 0,
          earth_fragment: earthfragment || 0,
          air_fragment: airfragment || 0,
        }),
      );
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.rewardFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

function* shogunQuest({ payload }) {
  const { id } = payload;
  try {
    if (id) {
      yield call(axios.put, `/shogun/1`, {
        id_player: id,
      });
      yield put(
        actions.shogunSuccess({
          id_player: id,
        }),
      );
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.rewardFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

function* createItemRequest({ payload }) {
  const {
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
  } = payload;
  try {
    if (id) {
      const data = yield call(axios.post, '/inventario', {
        nome: nome,
        class: classe,
        attributes_strength: attributesStrength,
        attributes_dexterity: attributesDexterity,
        attributes_intelligence: attributesIntelligence,
        attributes_luck: attributesLuck,
        tier: tier,
        price: priceItem,
        creator_item: creatorItem,
      });
      toast.success('Item Forjado com sucesso!');
      yield put(
        actions.itemRequest({
          id: data.data.id,
        }),
      );
      yield put(
        actions.createItemSuccess({
          nome: nome,
          class: classe,
          attributes_strength: attributesStrength,
          attributes_dexterity: attributesDexterity,
          attributes_intelligence: attributesIntelligence,
          attributes_luck: attributesLuck,
          tier: tier,
          price: priceItem,
          creator_item: creatorItem,
        }),
      );
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.loginFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

function* requestFragments({ payload }) {
  const { airfragment, firefragment, waterfragment, earthfragment } = payload;
  console.log(payload);
  try {
    yield call(axios.put, `/users`, {
      fire_fragment: firefragment,
      water_fragment: waterfragment,
      earth_fragment: earthfragment,
      air_fragment: airfragment,
    });
    toast.success('Fragmentos Atualizados');
    yield put(
      actions.updateFragments({
        fire_fragment: firefragment,
        water_fragment: waterfragment,
        earth_fragment: earthfragment,
        air_fragment: airfragment,
      }),
    );
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.loginFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

function* payFragments({ payload }) {
  const { airfragment, firefragment, waterfragment, earthfragment, id } =
    payload;
  try {
    yield call(axios.put, `/users/${id}`, {
      fire_fragment: firefragment,
      water_fragment: waterfragment,
      earth_fragment: earthfragment,
      air_fragment: airfragment,
    });
    toast.success('Fragmentos Atualizados');
    yield put(
      actions.payFragmentsSuccess({
        fire_fragment: firefragment,
        water_fragment: waterfragment,
        earth_fragment: earthfragment,
        air_fragment: airfragment,
      }),
    );
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente.');
      yield put(actions.loginFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REWARD_REQUEST, rewardRequest),
  takeLatest(types.UPDATE_REQUEST, updateRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.ITEM_REQUEST, itemRequest),
  takeLatest(types.ENERGY_RECALL, energyRecall),
  takeLatest(types.ENERGY_RECALL2, energyRecall2),
  takeLatest(types.PAYQUEST_REQUEST, payQuest),
  takeLatest(types.SHOGUNQUEST_REQUEST, shogunQuest),
  takeLatest(types.CHANGEITEM_REQUEST, changeItens),
  takeLatest(types.GOLDCHANGE_REQUEST, goldChangeRequest),
  takeLatest(types.CREATE_ITEM_REQUEST, createItemRequest),
  takeLatest(types.REQUEST_FRAGMENTS, requestFragments),
  takeLatest(types.PAYFRAGMENTS_REQUEST, payFragments),
]);
