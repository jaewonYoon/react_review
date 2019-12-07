const dummyUser = {
    nickname: 'Jay',
    Post: [],
    Followings: [],
    Followers: [], 
};

const initialState={
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {}
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

export const INCREMENT_NUMBER;

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
                loginData: action.data,
                isLoading: true,
                }
        }
        case LOG_IN_SUCCESS: {
            return{
                ...state,
                user: dummyUser,
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
                user: null,
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