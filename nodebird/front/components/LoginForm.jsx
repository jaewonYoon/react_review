import React,{useState, useCallback} from 'react';
import {Form, Input,Button} from 'antd';
import Link from 'next/link';
import {useDispatch,useSelector} from 'react-redux';
import {useInput} from '../pages/signup'; 
import {loginRequestAction} from '../reducers/user';

const LoginForm = () => {
    const [userId,onChangeId] = useInput(''); 
    const [password,onChangePassword] = useInput('');
    const {isLoggingIn} = useSelector(state => state.user); 
    const dispatch= useDispatch(); 
    
    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch(loginRequestAction({
                userId, 
                password 
        }));
    },[userId,password]);

    return( 
        <Form style={{margin:'10px'}} onSubmit = {onSubmitForm}>
            <div>
                <label htmlFor="userId">아이디</label>
                <br/>
                <Input name="userId" value={userId} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input name="user-password type=" type="password" value={password} required
                onChange={onChangePassword} />
            </div>
            <div style={{marginTop: '10px'}}>
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    )
}

export default LoginForm; 