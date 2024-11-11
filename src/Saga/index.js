// sagas/index.js
import { all } from 'redux-saga/effects';
import watchLogin from './LoginSaga';
import watchCourseSaga from './CourseSaga';
import watchBlogSaga from './BlogSaga'


export default function* rootSaga() {
  yield all([
    watchLogin(), // Add more watchers here
    watchCourseSaga(),
    watchBlogSaga()
  ]);
}
