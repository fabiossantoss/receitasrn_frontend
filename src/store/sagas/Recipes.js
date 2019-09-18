import React from 'react';
import {call, put} from 'redux-saga/effects';
import {Creators as Actions} from '~/store/ducks/Recipes';
import api from '~/services/api';
import {Types} from '~/store/ducks/Recipes';

export function* getRecipes() {
  console.tron.log('saga getRecipes');

  try {
    const response = yield call(api.get, '/receitas');

    if (response.data) {
      yield put({type: Types.GET_RECIPES_SUCCESS, data: response.data});
    }
  } catch (err) {
    yield put({type: Types.GET_RECIPES_SUCCESS, payload: err.message});
  }
}
