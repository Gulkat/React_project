import React from 'react';
import styled from 'styled-components';

import { Formik, Form } from 'formik';
import FormikInput from "../Components/FormikInputs/FormikInput";


const StyledLoginPage = styled.div`
    margin: 100px auto;
    width: 25%;
    background-color: #f7f7fc;

  .loginForm {
    border: 2px solid rgb(230,230,255);
    height: 400px;
    width: 500px;
    text-align: center;
    
  }
  .formTitle {
    font-size: 30px;
    font-weight: 500;
    font-family: "Century Gothic";
    color: #7e8bc4;
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
    margin-top: 30px;
  }
  .btnSubmit {
    margin-top: 30px;
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

    const ValidateEmail = (mail) => {
        return ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)))
    }

    const initialFormValues = {
        email: "",
        password: "",
    }

    const validateForm = (formValues) => {
        let isValid = true;
        let errorsObject = {};

        if (!formValues.email) {
            isValid = false;
            errorsObject.email = '! Обязательно для заполнения';
        } else if (!ValidateEmail(formValues.email)) {
            isValid = false;
            errorsObject.email = '! Поле заполнено некорректно'
        }

        if (!isValid) return errorsObject
    }

    return (
        <StyledLoginPage>
            <Formik initialValues={initialFormValues}
                    validate={validateForm}
                    onSubmit={(formValues) => {console.log('form values', formValues)}}>
                <Form className={'loginForm'}>
                    <h3 className={'formTitle'}>Вход на сайт</h3>
                    <FormikInput name={'email'} className={'email'} placeholder={'Email'}/>
                    <FormikInput name={'password'} type={'password'} className={'password'} placeholder={'Password'}/>
                    <button type={'submit'} className={'btnSubmit'}>Войти</button>
                </Form>
            </Formik>
        </StyledLoginPage>
    )
}


export default LoginPage