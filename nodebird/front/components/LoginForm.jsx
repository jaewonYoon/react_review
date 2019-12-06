import React,{useState, useCallback} from 'react';
import {Form, Input,Button} from 'antd';
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import {loginAction} from '../reducers/user';
// import {useInput} from '../pages/signup';

export const useInput = (initValue = null) => {
    const [value,setter] = useState(initValue);
    const handler = useCallback( (e) =>{
        setter(e.target.value);
    },[]);
    return [value, handler]; 
};

const LoginForm = () => {
    const dispatch= useDispatch(); 
    const [id,onChangeId] = useInput(''); 
    const [password,onChangePassword] = useInput('');
    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch(loginAction);
    },[id,password]);
    return( 
        <Form style={{margin:'10px'}} onSubmit = {onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input name="user-password type=" type="password" value={password} required
                onChange={onChangePassword} />
            </div>
            <div style={{marginTop: '10px'}}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    )
}

export default LoginForm; 