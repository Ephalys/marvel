import React from 'react';
import logo from "assets/marvel-logo.png";
import styled from 'styled-components'
import LoginForm from "components/login-form/login-form";


function Login() {
    return (
        <LoginDiv>
            <LoginContent>
                <Img src={logo} alt="logo marvel"/>
                <Title>
                    Login
                </Title>
                <LoginForm/>
            </LoginContent>
        </LoginDiv>
    );
}


const LoginDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

const LoginContent = styled.div`
  background-color: white;
  min-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px;
  border-radius: 15px;
  box-shadow: 0px 0px 23px 0px rgba(0,0,0,0.2);
`

const Img = styled.img`
  max-width: 250px;
`

const Title = styled.h1`
  margin: 30px 0;
`

export default Login;
