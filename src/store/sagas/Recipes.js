import {call, put} from 'redux-saga/effects';
import {Creators as Actions} from '~/store/ducks/Recipes';
import api from '~/services/api';

export function* getRecipes() {
  try {
    const response = yield call(api.get, '/receitas');

    if (response.data) {
      yield put(Actions.getRecipesSucces(response.data));
    }
  } catch (err) {
    yield put(Actions.getRecipesError(err.message));
  }
}
