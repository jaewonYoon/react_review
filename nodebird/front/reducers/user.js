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

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_SUCCESS= 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE= 'LOG_IN_FAILURE'; 

export const loginAction = {
    type: LOG_IN,
    data: {
        nickname: 'Jay',
    },
};
export const logoutAction = {
    type: LOG_OUT,
}
// 동적데이터를 전달하는 엑션 개체일 경우 매개변수를 사용한다. 
export const signUpAction = (data) => {
    return {
        type: SIGN_UP,
        data 
    };
}
const reducer = (state=initialState,action) => {
    switch(action.type){
        case LOG_IN:{
         return {
            ...state,
            isLoggedIn: true,
            user: dummyUser,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false, 
                user: null, 
            }
        }
        case SIGN_UP : {
            return {
                ...state,
                
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