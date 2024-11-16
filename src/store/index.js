import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './userSlice'; // Example slice
import couseReducer from './courseSlice'
import blogReducer from './blogSlice'
import appReducer from './aapSlice';
import rootSaga from '../Saga/index'; // Import rootSaga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store with saga middleware
const store = configureStore({
  reducer: {
    user: userReducer, // Add other reducers if needed
    course: couseReducer,
    blog: blogReducer,
    app: appReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Disable thunk and use saga
});

// store.asyncReducers = {};
// store.dynamicSagas = {};

// Run the root saga
sagaMiddleware.run(rootSaga);

// export function injectAsyncReducer(key, asyncReducer) {
//   // first check if the reducer already exists for this key
//   const existingStore = store.asyncReducers[key];

//   if (!existingStore) {
//       // need to think abt this later
//       store.asyncReducers[key] = asyncReducer;
//       store.replaceReducer(createReducer(store.asyncReducers));
//   }
// }

// export const injectDynamicSaga = (nameKey, saga) => {
//   if (!store.dynamicSagas[nameKey]) {
//       store.dynamicSagas[nameKey] = true;
//       sagaMiddleware.run(saga);
//   }
// };

export default store;
