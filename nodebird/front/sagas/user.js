import {all, fork, takeLatest, call, put ,take} from 'redux-saga/effects';
import {LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE} from '../reducers/user';

const HELLO_SAGA = 'HELLO_SAGA'; 

function loginAPI() {
    //서버에 API 요청을 보내는 부분 
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
    while(true){
        yield take(LOG_IN);
        // put 은 redux의 distpatch와 동일하게 작동하게 된다.
        // 로그인 액션을 받으면 자동으로 LOG_IN_SUCCESS를 실행하게 된다.  
        yield put({
            type: LOG_IN_SUCCESS,
        })
    }
}
export default function* userSaga() {
    yield all([
        watchLogin(),
        // watchSignUp()
    ]) 
}