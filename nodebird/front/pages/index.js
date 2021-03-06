import React,{useEffect} from 'react';
import PostForm from '../components/PostForm'; 
import PostCard from '../components/PostCard';
import {useDispatch, useSelector} from'react-redux'; 
// 메인화면 루트 파일 next는 import react를 하지 않아도 된다.  
import {LOAD_MAIN_POSTS_REQUEST} from '../reducers/post';
const Home = () => {
    const {me} = useSelector( state => state.user);
    const {mainPosts} = useSelector( state => state.post);
    const dispatch = useDispatch();
    //useEffect할 때 [] 안에 아무것도 없다면 componentDidMount와 같음 
    useEffect( () => {
        // 첫번째 렌더링 될 때 이 dispatch도 함께 되는 것 
        dispatch({
            type: LOAD_MAIN_POSTS_REQUEST
        });
    },[]);
    console.log('mainPosts:',mainPosts);
    console.log('me:',me);
    return(
        <div>
            {me && <PostForm />}
            {mainPosts.map((c) => {
            return(
                <PostCard key={c} post={c}/>
            )
        })}
        </div>
    )
}

export default Home;
