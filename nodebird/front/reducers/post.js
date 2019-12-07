const initialState= {
    mainPosts: [{
        User:{
            id: 1,
            nickname: 'Jay',
        },
        content: '첫 번째 게시글',
        img: 'https://images.unsplash.com/photo-1575550590262-4ad1d8738faa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }],
    imagePaths: [], // 미리보기 이미지 경로
    addPostErrorReason: false, //포스트 업로드 실패  
    isAddingPost: false, //포스트 업로드 중
    postAdded: false,
}

const dummyPost = {
    User: {
       id: 1,
       nickname: 'jay',
    },
    content: '나는 더미입니다.'
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST= 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS= 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE= 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST= 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS= 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE= 'LOAD_USER_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST= 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS= 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE= 'UPLOAD_IMAGES_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

const ADD_DUMMY = 'ADD_DUMMY';

export const addPost = {
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_POST_REQUEST: {
            return {
                ...state, 
                isAddingPost:true,
                addPostErrorReason: '',
                postAdded: false 
            };
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                isAddingPost: false,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true 
            }
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                isAddingPost: false,
                addPostErrorReason: action.error,
            };
        }
        case ADD_COMMENT_REQUEST: {
            return {
                ...state,
                isAddingComment: true,
                addCommentErrorReason: '',
                commentAdded: false, 
            }
        }
        case ADD_COMMENT_SUCCESS: {
        }
        default: {
            return {
                ...state 
            }
        }
    }
}   

export default reducer; 