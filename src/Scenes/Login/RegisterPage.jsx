import React from 'react';
import styled from 'styled-components';

import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import FormikInput from '../../Components/FormikFields/FormikInput';
import { createUserLogInAction } from '../../store/actions/userActionCreators';
import { addLoginUser } from '../../api/ResumeApi/resumeApi';

import { ROUTES } from '../../constants/routes';


const StyledRegisterPage = styled.div`
  background-color: #f7f7fc;
  width: 100%;
  margin: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .loginForm {
    padding-top: 100px;
    height: 500px;
    text-align: center;
    width: 500px;
    
  }
  .formTitle {
    font-size: 30px;
    font-weight: 500;
    font-family: ${props => props.theme.baseFont};
    color: ${props => props.theme.accentColor};;
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
  .linkWrapper {
    margin-top: 30px;
  }
  .link {
    text-decoration: none;
    font-family: ${props => props.theme.baseFont};
    color: ${props => props.theme.accentColor};
  }
  .link:hover {
    color: darkred;
  }
`

const RegisterPage = () => {
    const dispatch = useDispatch();

    const ValidateEmail = (email) => {
        return ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    };

    const initialFormValues = {
        userName: "",
        email: "",
        password: "",
    };

    const validateForm = (formValues) => {
        let isValid = true;
        let errorsObject = {};

        if (!formValues.userName) {
            isValid = false;
            errorsObject.userName = 'Обязательно для заполнения!';
        }
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
        addLoginUser({userName: formValues.userName, email: formValues.email, password: formValues.password}).then(() => {
            dispatch(createUserLogInAction({userName: formValues.userName, email: formValues.email, password: formValues.password}));
        });
    };

    return (
        <StyledRegisterPage>
            <Formik initialValues={initialFormValues}
                    validate={validateForm}
                    onSubmit={(formValues) => {
                        handleSubmit(formValues)
                    }}>
                <Form className={'loginForm'}>
                    <h3 className={'formTitle'}>Регистрация</h3>
                    <FormikInput name={'userName'} type={'text'} placeholder={'Name'}/>
                    <FormikInput name={'email'} type={'email'} placeholder={'Email'}/>
                    <FormikInput name={'password'} type={'password'} placeholder={'Password'}/>
                    <button type={'submit'} className={'btnSubmit'}>Зарегистрироваться</button>
                    <div className={'linkWrapper'}>
                        <Link to={ROUTES.login} className={'link'}>У меня уже есть аккаунт</Link>
                    </div>

                </Form>
            </Formik>
        </StyledRegisterPage>
    );
};


export default RegisterPage;