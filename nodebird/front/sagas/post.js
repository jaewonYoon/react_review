import {all,fork, put, call, takeLatest, delay} from 'redux-saga/effects'
import axios from 'axios'; 
import { 
    ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST,
    ADD_COMMENT_SUCCESS, ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE,
    LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_FAILURE
} from '../reducers/post';


function* addPostAPI(postData){
    return axios.post('/post',postData, {
        withCredentials: true,  //로그인 사람만 글 적을 수 있게. 쿠키같이 전송 
    });

}
function* addPost(action) {
    try{
        const result = yield call(addPostAPI, action.data) //addPostAPI의 postData 로 들어간다.
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data 
        })
    } catch(e){ 
        yield put({
            type:ADD_POST_FAILURE,
            error: e
        });
    }
}
function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}


function* loadMainPostsAPI(){
    axios.get('/posts').then((res) => {
        return res; 
    });

}
function* loadMainPosts() {
    try{
        const result = yield call(loadMainPostsAPI); //loadMainPostAPI의 postData 로 들어간다.
        
        yield put({
            type: LOAD_MAIN_POSTS_SUCCESS,
            data: result.data
        })
    } catch(e){ 
        yield put({
            type:LOAD_MAIN_POSTS_FAILURE,
            error: e
        })
    }
}
function* watchLoadMainPosts() {
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
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
        fork(watchLoadMainPosts),
        fork(watchAddComment),
    ]);
}