import React from 'react';
import styled from 'styled-components';

import {FieldArray, useFormikContext} from 'formik';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import FormikInput from './FormikFields/FormikInput';

const StyledSkills = styled.div `
  font-family: ${props => props.theme.baseFont};
  box-sizing: border-box;
  padding: 55px 50px 20px;

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
    margin-bottom: 60px;
  }

  .addBtn:hover {
    background-color: rgba(0, 153, 218, 0.05);
    border-color: rgb(191, 197, 214);
  }

  .iconBtn {
    margin-right: 5px;
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
    margin-right: 20px;
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
  .wrapper {
    display: flex;
    justify-content: left;
    align-items: center;
    
  }
`

const Skills = () => {
    const { values, submitForm } = useFormikContext();

    return (
        <StyledSkills id={'skills'}>
            <div className={'section'}>
                <h1 className={'sectionName'}  >Расскажите о своих навыках</h1>
                <p className={'description'}>Начните с того, в котором вы наиболее опытны</p>
            </div>

            <FieldArray
                name='skills'
                render={arrayHelpers => (
                    <React.Fragment>
                        <button type={'button'} className={'addBtn'} onClick={() => {arrayHelpers.push({})}}>
                                <span className={'innerBtn'}>
                                    <span className={'iconBtn'}>+</span>
                                    <span className={'titleBtn'}>Добавить навык</span>
                                </span>
                        </button>
                        {values.skills.map((name, index) => {
                            return (
                                <React.Fragment>
                                    <div className={'wrapper'}>
                                        <div className={'box'}>
                                            <label className={'label'}><span>Навык</span>
                                                <div className={'overlay_background'}></div>
                                            </label>
                                            <FormikInput className={'input'} type={'text'} name={`skills.${index}.skill`}/>
                                        </div>
                                        <div className={'deleteBtnWrapper'}>
                                            <button className={'deleteBtn'} type={'button'} onClick={() => {arrayHelpers.remove(index)}}><FontAwesomeIcon icon={faTrashCan}/></button>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </React.Fragment>
                )}/>
            </StyledSkills>
    );
};


export default Skills;