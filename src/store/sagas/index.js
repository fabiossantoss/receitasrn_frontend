import {all, takeLatest} from 'redux-saga/effects';
import {Types as RecipesTypes} from '~/store/ducks/Recipes';

import {getRecipes} from './Recipes';

export default function* rootSaga() {
  return yield all([takeLatest(RecipesTypes.GET_RECIPES, getRecipes)]);
}



adonis new teste --api-only

DB_DATABASE
bdProjeto

DB_HOST
srv01191041.database.windows.net

DB_PASSWORD
#Gf48005253818

DB_USER
vitor01191041

DB_PORT
3306