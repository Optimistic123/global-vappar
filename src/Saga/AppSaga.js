// sagas/userSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { login, loginSuccess, loginFailure } from '../store/userSlice';

// Mock API call function
function loginApi(userData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.email === 'john@example.com' && userData.password === 'password') {
        resolve({ name: 'John Doe', email: 'john@example.com' });
      } else {
        reject('Invalid credentials');
      }
    }, 1000);
  });
}

// Worker Saga: Handles login
function* handleLogin(action) {
  try {
    const user = yield call(loginApi, action.payload);
    // Dispatch login success action if API call is successful
    yield put(loginSuccess(user));
  } catch (error) {
    // Dispatch login failure action if API call fails
    yield put(loginFailure(error));
  }
}

// Watcher Saga: Watches for login actions and starts the worker saga
function* watchLogin() {
  yield takeLatest(login.type, handleLogin);
}

export default watchLogin;
