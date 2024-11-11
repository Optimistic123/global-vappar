// sagas/index.js
import { all } from 'redux-saga/effects';
import watchLogin from './LoginSaga';
import watchCourseSaga from './CourseSaga'

export default function* rootSaga() {
  yield all([
    watchLogin(), // Add more watchers here
    watchCourseSaga()
  ]);
}
