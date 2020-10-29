import React from 'react';
import logo from "assets/marvel-logo.png";
import styled from 'styled-components'
import LoginForm from "components/login-form/login-form";


function Login() {
    return (
        <LoginDiv>
            <LoginContent>
                <ImageWrapper>
                    <Img src={logo} alt="logo marvel"/>
                </ImageWrapper>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  height: 100%;
  
  @media (min-width: 768px) {
  padding: 60px;
  min-width: 350px;
  width: unset;
  height: unset;
  border-radius: 15px;
  box-shadow: 0px 0px 23px 0px rgba(0,0,0,0.2);
  }
`

const ImageWrapper = styled.div`
  flex: 1 1 0;
  align-items: center;
  display: flex;
`

const Img = styled.img`
  max-width: 150px;
  
  @media (min-width: 768px) {
    max-width: 250px;
  }
`

export default Login;
