import React,{useState,useEffect} from 'react';
import PostForm from '../components/PostForm'; 
import PostCard from '../components/PostCard';
import {useDispatch, useSelector, connect} from'react-redux'; 
import {loginAction, logoutAction} from '../reducers/user';
// 메인화면 루트 파일 next는 import react를 하지 않아도 된다.  

const Home = ({}) => {
    const {isLoggedIn,me} = useSelector( (state) =>state.user);
    const {mainPosts} = useSelector( (state) => state.post);
    // const {isLoggedIn, user} = useSelector(state => state.user);
    //useEffect할 때 [] 안에 아무것도 없다면 componentDidMount와 같음 
    const dispatch = useDispatch();
    useEffect( () => {
        
        // 첫번째 렌더링 될 때 이 dispatch도 함께 되는 것 
        // dispatch(loginAction);
    },[]);
    return(
        <div>
            {isLoggedIn ? <div>로그인 했습니다: {me.nickname}</div> : <div>로그아웃 했습니다.</div>}
            {isLoggedIn && <PostForm />}
            {mainPosts.map( (c) => {
                return(
                    <PostCard key={c} post={c}/>
                )
            })}
        </div>
    )
}

export default Home;
