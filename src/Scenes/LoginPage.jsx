import React from 'react';
import styled from 'styled-components';


const StyledLoginPage = styled.div`

  .loginForm {
    border: 2px solid blue;
    height: 400px;
    width: 500px;
    text-align: center;
    
    
  }
  .formTitle {
    font-size: 30px;
    font-weight: 500;
    font-family: "Century Gothic";
  }
  input {
    width: 80%;
    overflow: hidden;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.2px;
    border-radius: 3px;
    border: 2px solid rgb(230, 230, 255);
    background-color: rgb(255, 255, 255);
    padding: 13px 35px 9px 16px;
    color: rgb(72, 72, 112);
    font-family: "Century Gothic";
    margin-bottom: 30px;
  }
  .btnSubmit {
    padding: 15px;
    font-weight: 900;
    position: relative;
    border: none;
    background: rgb(33, 150, 243);
    color: rgb(255, 255, 255);
    width: auto;
    font-family: Century Gothic;
    font-size: 20px;
    cursor: pointer;
    will-change: box-shadow;
    border-radius: 4px;
  }
  .btnSubmit:hover {
    background-color: rgb(22, 136, 254);
  }
  
`
const LoginPage = () => {

    return (
        <StyledLoginPage>
            <form className={'loginForm'}>
                <h3 className={'formTitle'}>Вход на сайт</h3>
                <input type={'email'} className={'email'} placeholder={'Email'}/>
                <input type={'password'} className={'password'} placeholder={'Password'}/>
                <button type={'submit'} className={'btnSubmit'}>Войти</button>
            </form>
        </StyledLoginPage>
    )
}


export default LoginPage