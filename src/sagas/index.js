import {takeLatest, all} from 'redux-saga/effects';
import {fetchCategorySaga} from './CategorySaga';
import * as CONST from '../utils/Constants';

export default function* root() {
  yield all([takeLatest(CONST.FETCH_CATEGORIES, fetchCategorySaga)]);
}
