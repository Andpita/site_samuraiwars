import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}

export function createItemRequest(payload) {
  return {
    type: types.CREATE_ITEM_REQUEST,
    payload,
  };
}

export function createItemSuccess(payload) {
  return {
    type: types.CREATE_ITEM_REQUEST,
    payload,
  };
}

export function createItemFailure(payload) {
  return {
    type: types.CREATE_ITEM_REQUEST,
    payload,
  };
}

export function updateRequest(payload) {
  return {
    type: types.UPDATE_REQUEST,
    payload,
  };
}

export function updateSuccess(payload) {
  return {
    type: types.UPDATE_SUCCESS,
    payload,
  };
}

export function updateFailure(payload) {
  return {
    type: types.UPDATE_FAILURE,
    payload,
  };
}

export function registerFailure(payload) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}

export function registerSuccess(payload) {
  return {
    type: types.REGISTER_SUCCESS,
    payload,
  };
}

export function rewardRequest(payload) {
  return {
    type: types.REWARD_REQUEST,
    payload,
  };
}

export function rewardSuccess(payload) {
  return {
    type: types.REWARD_SUCCESS,
    payload,
  };
}

export function rewardFailure(payload) {
  return {
    type: types.REWARD_FAILURE,
    payload,
  };
}

export function itemRequest(payload) {
  console.log(payload);
  return {
    type: types.ITEM_REQUEST,
    payload,
  };
}

export function itemSuccess(payload) {
  return {
    type: types.ITEM_SUCCESS,
    payload,
  };
}

export function itemFailure(payload) {
  return {
    type: types.ITEM_FAILURE,
    payload,
  };
}

export function energyRecall(payload) {
  return {
    type: types.ENERGY_RECALL,
    payload,
  };
}

export function energyRecall2(payload) {
  return {
    type: types.ENERGY_RECALL2,
    payload,
  };
}

export function changeItens(payload) {
  return {
    type: types.CHANGEITEM_REQUEST,
    payload,
  };
}

export function payQuest(payload) {
  return {
    type: types.PAYQUEST_REQUEST,
    payload,
  };
}

export function payFragments(payload) {
  return {
    type: types.PAYFRAGMENTS_REQUEST,
    payload,
  };
}

export function payFragmentsSuccess(payload) {
  return {
    type: types.PAYFRAGMENTS_SUCCESS,
    payload,
  };
}

export function shogunQuest(payload) {
  return {
    type: types.SHOGUNQUEST_REQUEST,
    payload,
  };
}

export function shogunSuccess(payload) {
  return {
    type: types.SHOGUNQUEST_SUCCESS,
    payload,
  };
}

export function paySuccess(payload) {
  return {
    type: types.PAYQUEST_SUCCESS,
    payload,
  };
}

export function goldChangeRequest(payload) {
  return {
    type: types.GOLDCHANGE_REQUEST,
    payload,
  };
}

export function goldChangeSuccess(payload) {
  return {
    type: types.GOLDCHANGE_SUCCESS,
    payload,
  };
}

export function requestFragments(payload) {
  return {
    type: types.REQUEST_FRAGMENTS,
    payload,
  };
}

export function updateFragments(payload) {
  return {
    type: types.UPDATE_FRAGMENTS,
    payload,
  };
}
