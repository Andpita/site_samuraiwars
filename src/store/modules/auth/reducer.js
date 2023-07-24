import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
  status: {},
  equiped: {},
  fragments: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      newState.status = action.payload.status;
      newState.equiped = action.payload.equiped;
      newState.fragments = action.payload.fragments;

      return newState;
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.UPDATE_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.REWARD_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.ENERGY_RECALL: {
      const newState = { ...state };
      newState.status.energy = action.payload.energy;
      return newState;
    }

    case types.ENERGY_RECALL2: {
      const newState = { ...state };
      newState.status.energy = action.payload.energy;
      return newState;
    }

    case types.GOLDCHANGE_REQUEST: {
      const newState = { ...state };
      newState.status.gold = action.payload.gold;
      return newState;
    }

    case types.GOLDCHANGE_SUCCESS: {
      const newState = { ...state };
      newState.status.gold = action.payload.gold;
      return newState;
    }

    case types.UPDATE_SUCCESS: {
      const newState = { ...state };
      newState.status.strength = action.payload.strength;
      newState.status.dexterity = action.payload.dexterity;
      newState.status.intelligence = action.payload.intelligence;
      newState.status.luck = action.payload.luck;
      newState.status.gold = action.payload.gold;
      newState.status.energy = action.payload.energy;
      newState.status.level = action.payload.level;
      newState.status.hp = action.payload.hp;
      newState.status.reputacao = action.payload.reputacao;
      newState.status.xp = action.payload.xp;
      newState.status.victorypvp = action.payload.victorypvp;

      newState.isLoading = false;

      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      newState.user.nome = action.payload.nome;
      newState.user.email = action.payload.email;
      newState.status.strength = action.payload.strength;
      newState.status.dexterity = action.payload.dexterity;
      newState.status.intelligence = action.payload.intelligence;
      newState.status.luck = action.payload.luck;
      newState.status.gold = action.payload.gold;
      newState.status.energy = action.payload.energy;
      newState.status.level = action.payload.level;
      newState.status.hp = action.payload.hp;
      newState.status.reputacao = action.payload.reputacao;
      newState.status.xp = action.payload.xp;
      newState.status.victorypvp = action.payload.victorypvp;
      newState.equiped = action.payload.equiped;
      newState.fragments = action.payload.fragments;

      return newState;
    }

    case types.REWARD_SUCCESS: {
      const newState = { ...state };
      newState.status.strength = action.payload.strength;
      newState.status.dexterity = action.payload.dexterity;
      newState.status.intelligence = action.payload.intelligence;
      newState.status.luck = action.payload.luck;
      newState.status.gold = action.payload.gold;
      newState.status.energy = action.payload.energy;
      newState.status.level = action.payload.level;
      newState.status.hp = action.payload.hp;
      newState.status.reputacao = action.payload.reputacao;
      newState.status.xp = action.payload.xp;
      newState.status.victorypvp = action.payload.victorypvp;

      newState.isLoading = false;

      return newState;
    }

    case types.ITEM_SUCCESS: {
      const newState = { ...state };

      newState.isLoading = false;

      return newState;
    }

    case types.CHANGEITEM_REQUEST: {
      const newState = { ...state };
      newState.equiped.sword = action.payload.equiped_sword;
      newState.equiped.armor = action.payload.equiped_armor;
      newState.equiped.helmet = action.payload.equiped_helmet;
      newState.equiped.glove = action.payload.equiped_glove;
      newState.equiped.amulet = action.payload.equiped_amulet;

      newState.equiped.swordAtr1 = action.payload.equiped_sword_atr1;
      newState.equiped.armorAtr1 = action.payload.equiped_armor_atr1;
      newState.equiped.helmetAtr1 = action.payload.equiped_helmet_atr1;
      newState.equiped.gloveAtr1 = action.payload.equiped_glove_atr1;
      newState.equiped.amuletAtr1 = action.payload.equiped_amulet_atr1;

      newState.equiped.swordAtr2 = action.payload.equiped_sword_atr2;
      newState.equiped.armorAtr2 = action.payload.equiped_armor_atr2;
      newState.equiped.helmetAtr2 = action.payload.equiped_helmet_atr2;
      newState.equiped.gloveAtr2 = action.payload.equiped_glove_atr2;
      newState.equiped.amuletAtr2 = action.payload.equiped_amulet_atr2;

      return newState;
    }

    case types.REQUEST_FRAGMENTS: {
      const newState = { ...state };
      newState.fragments.airfragment = action.payload.airfragment;
      newState.fragments.firefragment = action.payload.firefragment;
      newState.fragments.waterfragment = action.payload.waterfragment;
      newState.fragments.earthfragment = action.payload.earthfragment;

      return newState;
    }

    default: {
      return state;
    }
  }
}
