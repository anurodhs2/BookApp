import * as CONST from '../utils/Constants';

export function fetchCategories() {
  return {
    type: CONST.FETCH_CATEGORIES,
  };
}

export function fetchCategoriesSuccess(bookData, categories) {
  return {
    type: CONST.FETCH_CATEGORIES_SUCCESS,
    payload: {
      bookData: bookData,
      categories: categories
    }
  };
}

export function ffetchCategoriesFailure() {
  return {
    type: CONST.FETCH_CATEGORIES_FAILURE,
  };
}
