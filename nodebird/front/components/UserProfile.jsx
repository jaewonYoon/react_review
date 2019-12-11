import React, { useCallback } from 'react';
import {Card,Avatar,Button} from 'antd'; 
import {useSelector,useDispatch} from 'react-redux';
import {logoutRequestAction} from '../reducers/user';

const UserProfile = () => {
    const dispatch = useDispatch(); 
    const onLogout = useCallback(() => {
        dispatch(logoutRequestAction);
    },[]);
    const {me} = useSelector(state => state.user); 
    return (
        <Card
            actions={[
                // <div key="twit">쨱짹<br/>{me.Post.length}</div>,
                // <div key="following">팔로잉<br/>{me.Followings.length}</div>,
                // <div key="follower">팔로워<br/>{me.Followers.length}</div>
            ]}
        >
            {/* card에 대한 설명을 적는 Card.Meta  */}
            <Card.Meta 
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile;