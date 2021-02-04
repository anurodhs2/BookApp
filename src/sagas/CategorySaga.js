import {put, call} from 'redux-saga/effects';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from '../actions/CategoryActions';
import {secureGet} from '../utils/SendJSON';
import {CATEGORIES} from '../utils/Constants';

export function* fetchCategorySaga() {
  try {
    const bookData = yield call(secureGet, '');
    const categories = [
      ...new Set(bookData.map((item) => item[CATEGORIES.AUTHOR_COUNTRY])),
      ...new Set(bookData.map((item) => item[CATEGORIES.AUTHOR_NAME])),
      ...new Set(bookData.map((item) => item[CATEGORIES.GENRE])),
    ];
    if (bookData) {
      yield put(fetchCategoriesSuccess(bookData, categories));
    } else {
      yield put(fetchCategoriesFailure());
    }
  } catch (error) {
    console.warn('error', error);
    yield put(fetchCategoriesFailure());
  }
}
