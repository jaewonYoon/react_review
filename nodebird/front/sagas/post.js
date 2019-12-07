import {all,fork, put, takeEvery, takeLatest, delay} from 'redux-saga/effects'
import { 
    ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST,

} from '../reducers/post';

function* addPost() {
    try{
        yield put({
            type: ADD_POST_SUCCESS,
        })
    } catch(e){ 
        yield put({
            type:ADD_POST_FAILURE,
            error: e
        })
    }
}
function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}
export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ]);
}