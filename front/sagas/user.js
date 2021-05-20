import { all, fork, takeLatest, delay, put } from '@redux-saga/core/effects';

// function logInAPI(data) {
//   return axios.post('/api/login', data); // 서버로 요청을 보내는 코드
// }

// function logOutAPI() {
//   return axios.post('/api/logout');
// }

function* logIn(action) {
  try {
    console.log('saga 실행됨');
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    });
  }
}

function* logOut() {
  try {
    //const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: 'LOG_OUT_SUCCESS',
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data,
    });
  }
}

// 이벤트 리스너 역할
function* watchLogIn() {
  yield takeLatest('LOG_IN_REQUEST', logIn); // 'LOG_IN'이라는 액션이 실행되면 logIn 함수를 실행한다.
}
function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
