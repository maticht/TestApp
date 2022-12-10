import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_POSTS_FETCH, GET_POSTS_SUCCESS} from './actions';

function postsFetch() {
  return fetch(
    'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
  ).then(response => response.json());
}

function* workGetPostsFetch() {
  const posts = yield call(postsFetch);
  yield put({type: GET_POSTS_SUCCESS, posts});
}

function* mySaga() {
  yield takeEvery(GET_POSTS_FETCH, workGetPostsFetch);
}

export default mySaga;
