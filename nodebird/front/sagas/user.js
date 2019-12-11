import axios from 'axios';
import {all, fork, delay, call, put ,takeLatest, takeEvery} from 'redux-saga/effects';
import {
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
    LOG_OUT_REQUEST,LOG_OUT_SUCCESS,LOG_OUT_FAILURE
} from '../reducers/user';
// take은 기다리고 자동으로 .next()함수를 호출해주는 것, put은 dispatch해주는 것 

axios.defaults.baseURL = 'http://localhost:3002/api'; 

function loginAPI(loginData) {
    console.log(loginData);
    //서버에 API 요청을 보내는 부분 
    return axios.post('/user/login', loginData, {
        withCredentials:true
    });
}
function* login(action){
    try{
        const result = yield call(loginAPI, action.data); //실패하면 catch(e)로 
        yield put({ //loginAPI 성공 
            type: LOG_IN_SUCCESS,
            data: result.data
        })
    } catch(e) {
        console.error(e); 
        yield put( {//loginAPI 실패 
            type: LOG_IN_FAILURE
        })
    }
}
function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login); //disaptch에서 action으로 들어가는 것 위의 login(action)으로 전달 됨 
}

function* logout() {
    try{
        yield put({
            type: LOG_OUT_SUCCESS
        });
    }catch(e){
        yield put({
            type: LOG_OUT_FAILURE
        })
    }
}
function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logout);
}
function* signUpAPI(signUpData) {
    return axios.post('/user', signUpData);
}

function* signUp(action) {
    try{
        // 첫번째 인자는 함수, 두번쨰 인자는 첫번째 함수 인자로 전달된다. 
        yield call(signUpAPI,action.data);
        yield put({
            type:SIGN_UP_SUCCESS,
        });
    }catch(e) {
        console.error(e);
        yield put({
            type:SIGN_UP_FAILURE,
            error: e 
        });
    }
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}


export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignUp),
    ]) 
}