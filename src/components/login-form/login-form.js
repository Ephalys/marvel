import React, {useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from "react-router-dom";


const LoginForm = (props) => {
    let history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://easy-login-api.herokuapp.com/users/login`, {username, password})
            .then(res => {
                const token = res.headers['x-access-token'];
                localStorage.setItem('token', token);
                history.push('/comics')
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormWrapper>
                <Title>
                    Login
                </Title>
                <FormGroup>
                    <Label htmlFor="username">
                        Username
                    </Label>
                    <Input type="text"
                           placeholder="Username"
                           id="username"
                           value={username}
                           onChange={e => setUsername(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">
                        Password
                    </Label>
                    <Input type="password" placeholder="Password" id="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}/>
                </FormGroup>
            </FormWrapper>
            <Button>
                Login
            </Button>
        </Form>
    );
}

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 2 1 0;
`

const FormWrapper = styled.div`
  align-self: stretch;
  height: 100%;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  
  &:last-child {
  margin-bottom: 0;
  }
`

const Label = styled.label`
  display: none;
`

const Input = styled.input`
  padding: 12px 15px;
  border-radius: 12px;
  border: none;
  transition: all .3s;
  background-color: #f6f6f6;
  
  &:focus {
  box-shadow: 0px 0px 15px -8px rgba(0,0,0,0.35);
  outline: none;
  transition: all .3s;
  background-color: white;
  }
`

const Button = styled.button`
  padding: 12px 15px;
  width: 100%;
  border-radius: 10px;
  border: none;
  background: linear-gradient(-45deg, #9eff00, #1900fc, #e73c7e);
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: all .5s;
  background-size: 100% 100%;
  
  &:hover {
      background-size: 150% 150%;
      transition: all .5s;
  }
`

const Title = styled.h1`
  margin: 30px 0;
`

export default LoginForm;