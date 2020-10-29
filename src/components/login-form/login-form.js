import React, {Component} from 'react';
import styled from 'styled-components'

class LoginForm extends Component {
    render() {
        return (
            <Form action="" method="POST">
                <FormGroup>
                    <Label htmlFor="username">
                        Username
                    </Label>
                    <Input type="text" placeholder="Username" id="username"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">
                        Password
                    </Label>
                    <Input type="password" placeholder="Password" id="password"/>
                </FormGroup>
                <Button>
                    Login
                </Button>
            </Form>
        );
    }
}

const Form = styled.form`
  width: 100%;
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
  background: linear-gradient(-45deg, #9eff00, #e73c7e, #1900fc);
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

export default LoginForm;