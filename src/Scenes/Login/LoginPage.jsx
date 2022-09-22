import React from 'react';
import styled from 'styled-components';

import { Formik, Form } from 'formik';
import FormikInput from '../../Components/FormikFields/FormikInput';
import { useDispatch } from 'react-redux';
import { createUserLogInAction } from '../../store/actions/userActionCreators';
import {LoginUser} from "../../api/ResumeApi/resumeApi";
import {Link} from "react-router-dom";
import {ROUTES} from "../../constants/routes";


const StyledLoginPage = styled.div`
    margin: 100px auto;
    width: 500px;
    background-color: #f7f7fc;

  .loginForm {
    border: 2px solid rgb(230,230,255);
    height: 500px;
    text-align: center;
    
  }
  .formTitle {
    font-size: 30px;
    font-weight: 500;
    font-family: ${props => props.theme.baseFont};
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
    font-family: ${props => props.theme.baseFont};
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
    font-weight: 900;
    font-size: 20px;
    font-family: ${props => props.theme.baseFont};
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }
  .btnSubmit:hover {
    background-color: rgb(22, 136, 254);
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
  .btnSubmit:focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
  }

`

const LoginPage = () => {
    const dispatch = useDispatch();

    const ValidateEmail = (email) => {
        return ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    };

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
        }
        if (!ValidateEmail(formValues.email)) {
            isValid = false;
            errorsObject.email = 'Поле заполнено некорректно!';
        }

        if (!isValid) return errorsObject
    };

    const handleSubmit = (formValues) => {
        LoginUser({email: formValues.email, password: formValues.password}).then(() => {
            dispatch(createUserLogInAction({email: formValues.email, password: formValues.password}));
        }).catch()
    };

    return (
        <StyledLoginPage>
            <Formik initialValues={initialFormValues}
                    validate={validateForm}
                    onSubmit={(formValues) => {
                        handleSubmit(formValues)
                    }}>
                <Form className={'loginForm'}>
                    <h3 className={'formTitle'}>Вход на сайт</h3>
                    <FormikInput name={'email'} type={'email'} placeholder={'Email'}/>
                    <FormikInput name={'password'} type={'password'} placeholder={'Password'}/>
                    <button type={'submit'} className={'btnSubmit'}>Войти</button>
                    <Link to={ROUTES.initialPage}>Зарегистрироваться</Link>
                </Form>
            </Formik>
        </StyledLoginPage>
    )
};


export default LoginPage;