import React from 'react';
import PostForm from '../components/PostForm'; 
import PostCard from '../components/PostCard';

// 메인화면 루트 파일 next는 import react를 하지 않아도 된다.  
const dummy = {
    isLoggedIn : true,
    imagePaths: [],
    mainPosts: [{
        User:{
            id: 1,
            nickname: 'Jay',
        },
        content: '첫 번째 게시글',
        img: 'https://images.unsplash.com/photo-1575550590262-4ad1d8738faa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }],
}

const Home = () => {
    return(
        <div>
            {dummy.isLoggedIn && <PostForm/>}
            {dummy.mainPosts.map( (c) => {
                return(
                    <PostCard key={c} post={c}/>
                )
            })}
        </div>
    )
}

export default Home;
