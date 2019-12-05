import React from 'react';
import {Card} from 'antd'; 
const UserProfile = () => {
    return (
        <Card
            actions={[
                <div key="twit">쨱짹<br/>{dummy.Post.length}</div>,
                <div key="following">팔로잉<br/>{dummy.Followings.length}</div>,
                <div key="follower">팔로워<br/>{dummy.Followers.length}</div>
            ]}
        >
            {/* card에 대한 설명을 적는 Card.Meta  */}
            <Card.Meta 
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}
            />
        </Card>
    )
}

export default UserProfile;