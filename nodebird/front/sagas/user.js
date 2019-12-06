import {all, fork, takeLatest} from 'redux-saga/effects';
import {LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE} from '../reducers/user';
function loginAPI() {

}
function* login(){
    try{
        yield call(loginAPI); //실패하면 catch(e)로 
        yield put({ //loginAPI 성공 
            type: LOG_IN_SUCCESS
        })
    } catch(e) {
        console.error(e); 
        yield put( {//loginAPI 실패 
            type: LOG_IN_FAILURE
        })
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN, login);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin)
    ]);
}