import React, {useEffect} from 'react';
import styled from 'styled-components';

import {FieldArray, useFormikContext} from 'formik';
import FormikInput from './FormikFields/FormikInput';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

const StyledEmployment = styled.div`
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
  .addBtn {
    display: flex;
    align-items: center;
    padding: 13px 3px;
    border-top: 1px dashed rgb(191, 197, 214);
    border-bottom: 1px dashed rgb(191, 197, 214);
    text-align: left;
    font-family: ${props => props.theme.baseFont};
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
  .deleteBtnWrapper {
    text-align: right;
  }
  .deleteBtn {
    margin-bottom: 15px;
    border: none;
    background-color: #f7f7fc;
    font-family: ${props => props.theme.baseFont};
    font-size: 16px;
    color: ${props => props.theme.accentColor};
  }
  .deleteBtn:hover {
    color:rgb(33, 150, 243);
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
  .boxDate {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 150;
    width: 100%;
  }
  .dateStart {
    width: 45%;
    position: relative;
  }
  .dateFinish {
    width: 45%;
    position: relative;
  }
  .inputDate {
    width: 85%;
    position: relative;
    overflow: hidden;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.2px;
    border-radius: 4px;
    border: 2px solid rgb(230, 230, 255);
    background-color: rgb(255, 255, 255);
    padding: 13px 15px 9px 15px;
    font-family: ${props => props.theme.baseFont};
  }
  .labelDateStart {
    padding: 0 5px;
    position: absolute;
    top: -8px;
    left: 15px;
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
  .labelDateFinish {
    padding: 0 5px;
    position: absolute;
    top: -8px;
    left: 15px;
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
  .checkboxWrap {
    padding-top: 20px;
    display: flex;
    align-items: center;
  }

  .check {
    box-sizing: border-box;
    padding: 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    text-align: center;
    cursor: pointer;
    overflow: visible;
  }
  .labelCheckbox {
    letter-spacing: 0.1px;
    font-family: ${props => props.theme.baseFont};
    color: rgb(113, 113, 166);
    font-size: 14px;
    line-height: normal;
    padding-left: 8px;
    cursor: pointer;
  }
  
  .boxDescription {
    margin-bottom: 35px;
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    width: 100% ;
  }
  .inputDescription {
    position: relative;
    width: 94%;
    overflow: hidden;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    border-radius: 3px;
    border: 2px solid rgb(230, 230, 255);
    background-color: rgb(255, 255, 255);
    color: rgb(72, 72, 112);
    font-family: ${props => props.theme.baseFont};
    padding: 20px 20px 200px 20px;
  }
`

const Employment = () => {
    const { values, submitForm } = useFormikContext();

    return (
        <StyledEmployment>
            <div className={'section'} id={'employment'}>
                <h1 className={'sectionName'}>Расскажите о своем опыте</h1>
                <p className={'description'}>Начните с вашей недавней работы</p>
            </div>

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
                                        <div className={'deleteBtnWrapper'}>
                                            <button className={'deleteBtn'} type={'button'} onClick={() => {arrayHelpers.remove(index)}}><FontAwesomeIcon icon={faTrashCan}/></button>
                                        </div>
                                        <div className={'form_box'}>
                                            <div className={'box'}>
                                                <label className={'label'}><span>Должность</span>
                                                    <div className={'overlay_background'}></div>
                                                </label>
                                                <FormikInput className={'input'} type={'text'} name={`employment.${index}.positionHeld`}/>
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
                                                        <FormikInput className={'inputDate'} type={'month'} placeholder={'Выберите дату'} name={`employment.${index}.startDate`}/>
                                                    </div>
                                                    <div className={'dateFinish'}>
                                                        <label className={'labelDateFinish'}><span>Дата окончания</span>
                                                            <div className={'overlay_background'}></div>
                                                        </label>
                                                        <FormikInput className={'inputDate'} type={'month'} placeholder={'Выберите дату'} name={`employment.${index}.endDate`}/>
                                                    </div>
                                                </div>
                                                <div className={'checkboxWrap'}>
                                                    <input name={'start'} type={"checkbox"} className={'check'} id={'currentlyWorkHere'}></input>
                                                    <span className={'labelWrap'}>
                                                        <label htmlFor={'currentlyWorkHere'} className={'labelCheckbox'}>В настоящее время работаю здесь</label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={'box'}>
                                                <label className={'label'}><span>Город</span>
                                                    <div className={'overlay_background'}></div>
                                                </label>
                                                <FormikInput className={'input'} type={'text'} name={`employment.${index}.workLocation`}/>
                                            </div>
                                            <div className={'boxDescription'}>
                                                <label className={'label'}><span>Описание</span>
                                                    <div className={'overlay_background'}></div>
                                                </label>
                                                <FormikInput className={'inputDescription'} type={'text'} name={`employment.${index}.responsibilities`}/>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </React.Fragment>
                    )}/>
        </StyledEmployment>
    )
}


export default Employment