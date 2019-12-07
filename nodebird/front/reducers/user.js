const dummyUser = {
    nickname: 'Jay',
    Post: [],
    Followings: [],
    Followers: [], 
};

const initialState={
    isLoggedIn: false, //로그인 여부 
    isLoggingOut: false, //로그아웃 시도중 
    isLoggingIn: false, //로그인 시도중 
    loginErrorReason: '', //로그인 에러 사유 
    signedUp: false, //회원가입 성공
    isSigningUp: false, //회원가입 시도 중 
    signUpErrorReason: '', //회원가입 실패 사유
    me: null, //내 정보 
    followingList: [], //팔로잉 리스트,
    follwerList: [], //팔로워 리스트,
    userInfo: null, //남의 정보
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS= 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE= 'LOG_IN_FAILURE'; 

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

<<<<<<< HEAD
export const INCREMENT_NUMBER;
=======
export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';



export let INCREMENT_NUMBER;
>>>>>>> 2d74aabc780806867f28e4672b918d36f7e4c832

export const loginAction = data => {
    return {
        type: LOG_IN_REQUEST,
        data: {
            nickname: 'Jay',
        }
    }
};
export const logoutAction = {
    type: LOG_OUT_REQUEST,
}
// 동적데이터를 전달하는 엑션 개체일 경우 매개변수를 사용한다. 
export const signUpAction = (data) => {
    return {
        type: SIGN_UP_REQUEST,
        data 
    };
}
const reducer = (state=initialState,action) => {
    switch(action.type){
        case LOG_IN_REQUEST:{
            return {
                ...state,
<<<<<<< HEAD
                loginData: action.data,
                isLoading: true,
=======
                isLoading: true,
                loginData: action.data,
>>>>>>> 2d74aabc780806867f28e4672b918d36f7e4c832
                }
        }
        case LOG_IN_SUCCESS: {
            return{
                ...state,
<<<<<<< HEAD
                user: dummyUser,
=======
                me: dummyUser,
>>>>>>> 2d74aabc780806867f28e4672b918d36f7e4c832
                isLoggedIn: true,
                isLoading: false 
            }
        }
        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOG_OUT_SUCCESS:{
            return {
                ...state,
                isLoggedIn: false,
<<<<<<< HEAD
                user: null,
=======
                me: null,
>>>>>>> 2d74aabc780806867f28e4672b918d36f7e4c832
                isLoading: false
            }
        }
        case SIGN_UP_REQUEST : {
            return {
                ...state,
                signUpData: action.data,
                isLoading: true,
            }
        }
        default: {
            return {
                ...state,
                signUpData: action.data, 
            };
        }
    }
}

export default reducer;