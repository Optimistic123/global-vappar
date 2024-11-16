// sagas/index.js
import { all } from 'redux-saga/effects';
import watchLogin from './AppSaga';

export default function* rootSaga() {
  yield all([
    watchLogin(), // Add more watchers here
  ]);
}
