const initialState= {
    mainPosts: [] 
}

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type: ADD_POST,
}

const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        userId: 1, 
        User: {
            nickname: 'Jay'
        }
    }
}; 

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            return {
                ...state, 
            };
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [...state.mainPosts,, action.data]
            };
        }
        default: {
            return {
                ...state 
            }
        }
    }
}   

export default reducer; 