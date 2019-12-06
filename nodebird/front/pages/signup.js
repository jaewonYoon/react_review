import React,{useState} from 'react';
import {Form, Input, Checkbox, Button} from 'antd';
import PropTypes from 'prop-types'; 

import {useDispatch} from 'react-redux';
import {signUpAction} from '../reducers/user';
const Signup = () => {
    const [userCredentials, setCredentials]= useState({
        id: '',
        nick: '', 
        email: '',
        pass: '',
        pass_chk :'',
        term: false, 
    })
    const {id,nick,pass} = userCredentials;
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] =useState(false);
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        const {pass_chk, pass,term} = userCredentials;
        if(pass_chk !== pass){
            setPasswordError(true);
            return false;  
        } 
        if(!term){
            setTermError(true); 
            return false; 
        }
        setTermError(false); 
        setPasswordError(false);
        dispatch(signUpAction({
            id,
            nick,
            pass
        }))
    }
    const onChange = (e) => {
        const {name,value} = e.target;
        if(name==='term'){
            setCredentials({...userCredentials, [name]: e.target.checked});
        }
        else setCredentials({...userCredentials, [name]:value});
    }

    return (
        <>
            <Form onSubmit={onSubmit} style={{padding:10}}>
                <div>
                    <label htmlFor="id">아이디</label>
                    <br/>
                    <Input name="id" required onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="nick">닉네임</label>
                    <br/>
                    <Input name="nick" required onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="pass">비밀번호</label>
                    <br/>
                    <Input name="pass" type="password" required onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="pass_chk">비밀번호 확인</label>
                    {
                        passwordError ? 
                        <p>비밀번호가 일치하지 않습니다.</p>:
                        null
                    }
                    <br/>
                    <Input name="pass_chk" type="password" required onChange={onChange}/>
                </div>
                <div>
                    <Checkbox name="term"  required value={userCredentials.term} onChange={onChange}>회원가입에 동의합니다.</Checkbox>
                    {
                        termError ?
                        <span style={{color:'blue'}}>약관에 동의해주세요.</span>: 
                        null 
                    }
                </div>
                <div>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </>
    )
};

export default Signup;