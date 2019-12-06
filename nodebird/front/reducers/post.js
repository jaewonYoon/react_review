const initialState= {
    mainPosts: [{
        User:{
            id: 1,
            nickname: 'Jay',
        },
        content: '첫 번째 게시글',
        img: 'https://images.unsplash.com/photo-1575550590262-4ad1d8738faa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }],
    imagePaths: [], 
}

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

export const addPost = {
    type: ADD_POST,
}

export const addDummy = {
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