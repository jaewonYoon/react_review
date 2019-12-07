import {all,fork, put, takeEvery, takeLatest, delay} from 'redux-saga/effects'
import { 
    ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST,
    ADD_COMMENT_SUCCESS, ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE
} from '../reducers/post';

function* addPostAPI(){
    
}
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

function addCommentAPI(){
    
}
// ADD_COMMENT_REQUEST에 대한 action 
function* addComment(action) {
    try{
        yield delay(2000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data:{
                postId: action.data.postId
            }
        }); 
    } catch(e) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: e 
        })
    }
}
function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}


export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment)
    ]);
}