export const Types = {
  GET_RECIPES: 'RECIPES/GET_RECIPES',
  GET_RECIPES_ERROR: 'RECIPES/GET_RECIPES_ERROR',
  GET_RECIPES_SUCCESS: 'RECIPES/GET_RECIPES_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function recipes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_RECIPES:
      return {loading: true, error: false, data: []};
    case Types.GET_RECIPES_SUCCESS:
      return {loading: false, error: '', data: action.data};
    case Types.GET_RECIPES_ERROR:
      return {loading: false, error: action.payload.error, ...state};
    default:
      return state;
  }
}

// export const Creators = {
//   getRecipes: () => ({
//     type: Types.GET_RECIPES,
//   }),

//   getRecipesSucces: data => ({
//     type: Types.GET_RECIPES_SUCCESS,
//     payload: {
//       data,
//     },
//   }),

//   getRecipesError: error => ({
//     type: Types.GET_RECIPES_ERROR,
//     payload: {
//       error,
//     },
//   }),
// };
