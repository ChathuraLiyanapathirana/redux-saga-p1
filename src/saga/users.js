import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* getUser(action) {
  console.log('getUser');
  try {
    const response = yield call(
      fetch,
      'https://jsonplaceholder.typicode.com/users'
    );
    const data = yield response.json();
    yield put({ type: 'FETCH_USERS_FULFILLED', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_USERS_REJECTED', payload: error.message });
  }
}

function* userWatcher() {
  yield takeEvery('FETCH_USERS_PENDING', getUser);
}

export default userWatcher;
