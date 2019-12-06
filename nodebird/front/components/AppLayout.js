import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import {Menu, Input, Button, Row, Col, Card, Avatar, Form} from 'antd';
import {useSelector, useDispatch} from 'react-redux'; 

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import {loginAction} from '../reducers/user';

const AppLayout = ({children}) => {
    const dispatch = useDispatch(); 
    const {isLoggedIn} = useSelector((state) => state.user); 
    useEffect( () => {
        // dispatch(loginAction);
    },[]);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{verticalAlign:'middle'}}/>
                </Menu.Item>
            </Menu>
            <Row gutter={10}>
                <Col xs={24} md={6} >
                    {isLoggedIn ? 
                    <UserProfile/>:
                     <LoginForm/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                </Col>
            </Row>
        </div>
    )    
};

export default AppLayout;