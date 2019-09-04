import {all, takeLatest} from 'redux-saga/effects';
import {Types as RecipesTypes} from '~/store/ducks/Recipes';

import {getRecipes} from './Recipes';

export default function* rootSaga() {
  return yield all([takeLatest(RecipesTypes.GET_RECIPES, getRecipes)]);
}
