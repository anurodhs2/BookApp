import * as CONST from '../utils/Constants';

const initialState = {
  bookData: [],
  categories: [],
  isFetching: false,
};

// This reducer stores the categories and book data.
export default function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.FETCH_CATEGORIES:
      return {
        ...state,
        bookData: [],
        categories: [],
        isFetching: true,
      };
    case CONST.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        bookData: action.payload.bookData,
        categories: action.payload.categories,
        isFetching: false,
      };
    case CONST.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
