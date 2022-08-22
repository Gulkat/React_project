import React from 'react';
import styled from 'styled-components';

import { Formik, Form } from 'formik';
import FormikInput from '../Components/FormikFields/FormikInput';
import { useDispatch } from 'react-redux';
import { createUserLogInAction } from '../store/actions/userActionCreators';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';


const StyledLoginPage = styled.div`
    margin: 100px auto;
    width: 500px;
    background-color: #f7f7fc;

  .loginForm {
    border: 2px solid rgb(230,230,255);
    height: 400px;
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
    position: relative;
    border: none;
    background: rgb(33, 150, 243);
    width: auto;
    will-change: box-shadow;
    border-radius: 4px;
  }
  .btnSubmit:hover {
    background-color: rgb(22, 136, 254);
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
  .btnSubmit:focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
  }
  .linkToLogIn {
    margin-top: 70px ;
    padding: 20px;
    font-weight: 900;
    border: none;
    font-size: 20px;  
    font-family: Century Gothic;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }
  .linkToLogIn:visited {
    color: #fff;
  }
`

const LoginPage = () => {
    const dispatch = useDispatch();

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
            errorsObject.email = 'Обязательно для заполнения!';
        } else if (!ValidateEmail(formValues.email)) {
            isValid = false;
            errorsObject.email = 'Поле заполнено некорректно!'
        }

        if (!isValid) return errorsObject
    }

    return (
        <StyledLoginPage>
            <Formik initialValues={initialFormValues}
                    validate={validateForm}
                    onSubmit={(formValues) =>
                        dispatch(createUserLogInAction({email:formValues.email, password:formValues.password}))}>
                <Form className={'loginForm'}>
                    <h3 className={'formTitle'}>Вход на сайт</h3>
                    <FormikInput name={'email'} type={'email'} className={'email'} placeholder={'Email'}/>
                    <FormikInput name={'password'} type={'password'} className={'password'} placeholder={'Password'}/>
                    <button type={'submit'} className={'btnSubmit'}>
                        <Link to={ROUTES.newResume} className={'linkToLogIn'}>Войти</Link>
                    </button>
                </Form>
            </Formik>
        </StyledLoginPage>
    )
}


export default LoginPage