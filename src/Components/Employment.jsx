import React from 'react';
import styled from 'styled-components';

import { Formik, Form, FieldArray } from 'formik';
import FormikInput from './FormikInputs/FormikInput';

const StyledEmployment = styled.div`
  font-family: 'Century Gothic';
  box-sizing: border-box;
  padding: 20px 50px 50px;
  
  .section {
    text-align: center;
  }
  
  .sectionName {
    color: #33334f;
    font-size: 35px;
    margin: 0;
  }
  .description {
    color: #7e8bc4;
    font-size: 20px;
    margin-bottom: 50px;
  }
  .addBtn {
    display: flex;
    align-items: center;
    padding: 13px 3px;
    border-top: 1px dashed rgb(191, 197, 214);
    border-bottom: 1px dashed rgb(191, 197, 214);
    text-align: left;
    font-family: "Century Gothic";
    font-size: 16px;
    color: rgb(22, 136, 254);
    font-weight: 400;
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-right: 0;
    border-left: 0;
    margin-bottom: 40px;
  }
  .addBtn:hover {
    background-color: rgba(0, 153, 218, 0.05);
    border-color: rgb(191, 197, 214);
  }
  .iconBtn {
    margin-right: 5px;
  }
  .deleteBtn {
    margin-bottom: 40px;
    border: 1px solid #7e8bc4;
    background-color: #f7f7fc;
    font-family: "Century Gothic";
    font-size: 18px;
    color: #7e8bc4;
  }
  .deleteBtn:hover {
    color:darkred;
    border: 1px solid darkred;
  }

  .form_box {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: -18px;
    margin-right: -18px;
    margin-bottom: 30px;
  }
  .box {
    margin-bottom: 35px;
    position: relative;
    padding-left: 18px;
    padding-right: 18px;
    flex-grow: 0;
    flex-shrink: 0;
    width: 46%;
  }
  .label {
    padding: 0 5px;
    position: absolute;
    top: -8px;
    left: 30px;
    z-index: 1;
    font-size: 12px;
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
    width: 90%;
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
  }
  
  .boxDate {
    display: flex;
    position: relative;
    z-index: 150;
  }
  
  .dateStart {
    width: 50%;
    margin-right: 12%;
  }
  
  .dateFinish {
    width: 50%;
  }
  
  .inputDate {
    position: relative;
    overflow: hidden;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.2px;
    border-radius: 4px;
    border: 2px solid rgb(230, 230, 255);
    background-color: rgb(255, 255, 255);
    padding: 13px 15px 9px 15px;
    font-family: "Century Gothic";
  }
  
  .labelDateStart {
    padding: 0 5px;
    position: absolute;
    top: -8px;
    left: 15px;
    z-index: 1;
    font-size: 12px;
    letter-spacing: 0.2px;
    text-align: center;
    background: #f7f7fc;
    color: #33334f;
    text-transform: uppercase;
    display: block;
    line-height: 20px;
    margin-bottom: calc(8px);
  }
  .labelDateFinish {
    padding: 0 5px;
    position: absolute;
    top: -8px;
    left: 260px;
    z-index: 1;
    font-size: 12px;
    letter-spacing: 0.2px;
    text-align: center;
    background: #f7f7fc;
    color: #33334f;
    text-transform: uppercase;
    display: block;
    line-height: 20px;
    margin-bottom: calc(8px);
  }
  .boxDescription {
    margin-bottom: 35px;
    position: relative;
    padding-left: 18px;
    padding-right: 18px;
    flex-grow: 0;
    flex-shrink: 0;
    width: 101.5%;
  }
  .inputDescription {
    position: relative;
    width: 95%;
    overflow: hidden;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    border-radius: 3px;
    border: 2px solid rgb(230, 230, 255);
    background-color: rgb(255, 255, 255);
    color: rgb(72, 72, 112);
    font-family: "Century Gothic";
    padding: 20px 20px 200px 20px;
  }
`
const StyledFooterBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .btnBack {
    width: auto;
    cursor: pointer;
    will-change: box-shadow;
    border-radius: 4px;
    background: transparent;
    border: 0;
    font-weight: 900;
    font-family: Century Gothic;
    font-size: 20px;
    color: rgb(113, 113, 166);
    display: flex;
  }
  .btnBack:hover {
    color: rgb(0, 153, 218);
  }
  .iconBack {
    margin-right: 10px;
  }
  .btnNext {
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
  .btnNext:hover {
    background-color: rgb(22, 136, 254);
  }
  .iconNext {
    margin-left: 10px;
  }
`

const Employment = () => {

    const initialFormValues = {
        employment: []
    }

    const validateForm = (formValues) => {
        let isValid = true;
        let errorsObject = {};

        if (!formValues.employment) {
            isValid = false;
            errorsObject.employment = '! Обязательно для заполнения';
        }

        if (!isValid) return errorsObject
    }

    return (
        <StyledEmployment>
            <div className={'section'}>
                <h1 className={'sectionName'}>Расскажите о своем опыте</h1>
                <p className={'description'}>Начните с вашей недавней работы</p>
            </div>
            <Formik initialValues={initialFormValues}
                    validate={validateForm}
                    onSubmit={(formValues) => {
                        // dispatch({type:'updateResumeData', payload: formValues})}
                        console.log(formValues)
                    }}
            render={({values}) => {
                return (
                    <Form>
                        <FieldArray
                            name='employment'
                            render={arrayHelpers => (
                                <React.Fragment>
                                    <button type={'submit'} className={'addBtn'} onClick={() => {arrayHelpers.push({})}}>
                                        <span className={'innerBtn'}>
                                            <span className={'iconBtn'}>+</span>
                                            <span className={'titleBtn'}>Добавить работу</span>
                                        </span>
                                    </button>
                                    {values.employment.map((name, index) => {
                                        return (
                                            <React.Fragment>
                                                <button className={'deleteBtn'} type={'button'} onClick={() => {arrayHelpers.remove(index)}}>Delete</button>
                                                <div className={'form_box'}>
                                                    <div className={'box'}>
                                                        <label className={'label'}><span>Должность</span>
                                                            <div className={'overlay_background'}></div>
                                                        </label>
                                                        <FormikInput className={'input'} type={'text'} name={`employment.${index}.jobTitle`}/>
                                                    </div>
                                                    <div className={'box'}>
                                                        <label className={'label'}><span>Работодатель</span>
                                                            <div className={'overlay_background'}></div>
                                                        </label>
                                                        <FormikInput className={'input'} type={'text'} name={`employment.${index}.employer`}/>
                                                    </div>
                                                    <div className={'box'}>
                                                        <div className={'boxDate'}>
                                                            <div className={'dateStart'}>
                                                                <label className={'labelDateStart'}><span>Дата начала</span>
                                                                    <div className={'overlay_background'}></div>
                                                                </label>
                                                                <FormikInput className={'inputDate'} type={'date'} placeholder={'Выберите дату'} name={`employment.${index}.startDate`}/>
                                                            </div>
                                                            <div className={'dateFinish'}>
                                                                <label className={'labelDateFinish'}><span>Дата окончания</span>
                                                                    <div className={'overlay_background'}></div>
                                                                </label>
                                                                <FormikInput className={'inputDate'} type={'date'} placeholder={'Выберите дату'} name={`employment.${index}.endDate`}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={'box'}>
                                                        <label className={'label'}><span>Город</span>
                                                            <div className={'overlay_background'}></div>
                                                        </label>
                                                        <FormikInput className={'input'} type={'text'}  name={`employment.${index}.city`}/>
                                                    </div>
                                                    <div className={'boxDescription'}>
                                                        <label className={'label'}><span>Описание</span>
                                                            <div className={'overlay_background'}></div>
                                                        </label>
                                                        <FormikInput className={'inputDescription'} type={'text'} name={`employment.${index}.description`}/>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}
                                </React.Fragment>
                            )}/>
                    </Form>
                )}}/>

            {/*<StyledFooterBtn className={'footer'}>*/}
            {/*    <button className={'btnBack'}><span className={'iconBack'}>🠄</span>Назад</button>*/}
            {/*    <button className={'btnNext'}>Перейти к Образование <span className={'iconNext'}>🠆</span></button>*/}
            {/*</StyledFooterBtn>*/}
        </StyledEmployment>
    )
}


export default Employment