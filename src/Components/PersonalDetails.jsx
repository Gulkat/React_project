import React from 'react';
import styled from 'styled-components';
import FormikInput from './FormikFields/FormikInput';
import {useFormikContext} from "formik";

const StyledPersonalDetails = styled.div`
  font-family: ${props => props.theme.baseFont};
  box-sizing: border-box;
  padding: 20px 50px 50px;

  .section {
    text-align: center;
  }

  .sectionName {
    color: #33334f;
    font-size: 30px;
    margin: 0;
  }

  .description {
    color: ${props => props.theme.accentColor};
    font-size: 20px;
    margin-bottom: 50px;
  }

  .form_box {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
  }

  .box {
    margin-bottom: 15px;
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    width: calc(50% - 20px);
  }

  .label {
    padding: 0 5px;
    position: absolute;
    top: -8px;
    left: 30px;
    z-index: 1;
    font-size: 10px;
    letter-spacing: 0.2px;
    text-align: center;
    background: #f7f7fc;
    color: #33334f;
    text-transform: uppercase;
    display: block;
    line-height: 20px;
    margin-bottom: calc(8px);
  }

  span {
    position: relative;
    z-index: 10;
  }

  .overlay_background {
    background: white;
    width: 100%;
    position: absolute;
    top: 10px;
    height: 10px;
    left: 0;
  }

  .input {
    position: relative;
    width: 85%;
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
  }
`

const PersonalDetails = () => {

    return (
        <StyledPersonalDetails>
            <div className={'section'}>
                <h1 className={'sectionName'} id={'personalDetails'}>Введите контактную информацию</h1>
                <p className={'description'}>Это позволит работодателю узнать, как с вами можно связаться</p>
            </div>

                <div className={'form'}>
                    <div className={'form_box'}>
                        <div className={'box'}>
                            <label className={'label'}><span>Имя</span>
                                <div className={'overlay_background'}></div>
                            </label>
                            <FormikInput name={'userName'} className={'input'} type={'text'}/>
                        </div>
                        <div className={'box'}>
                            <label className={'label'}><span>Фамилия</span>
                                <div className={'overlay_background'}></div>
                            </label>
                            <FormikInput name={'userSurname'} className={'input'} type={'text'}/>
                        </div>
                        <div className={'box'}>
                            <label className={'label'}><span>Email</span>
                                <div className={'overlay_background'}></div>
                            </label>
                            <FormikInput name={'email'} className={'input'} type={'email'}/>
                        </div>
                        <div className={'box'}>
                            <label className={'label'}><span>Телефон</span>
                                <div className={'overlay_background'}></div>
                            </label>
                            <FormikInput name= {'phone'} className={'input'} type={'tel'}/>
                        </div>
                        <div className={'box'}>
                            <label className={'label'}><span>Город</span>
                                <div className={'overlay_background'}></div>
                            </label>
                            <FormikInput name={'city'} className={'input'} type={'text'}/>
                        </div>
                        <div className={'box'}>
                            <label className={'label'}><span>Должность</span>
                                <div className={'overlay_background'}></div>
                            </label>
                            <FormikInput name={'jobTitle'} className={'input'} type={'text'}/>
                        </div>
                    </div>
                </div>
        </StyledPersonalDetails>
    )
}

export default PersonalDetails;
