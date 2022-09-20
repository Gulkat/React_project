import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PATHS } from '../constants/routes';

const StyledButtonToSaveResume = styled.div`
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  
  .btnToSaveResume, .btnToViewResume {
    max-width: 240px;
    min-width: 200px;
    font-size: 18px;
    font-family: ${props => props.theme.baseFont};
    padding: 15px 20px;
    font-weight: 900;
    background: rgb(33, 150, 243);
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .btnToSaveResume:hover, .btnToViewResume:hover {
    background-color: rgb(22, 136, 254);
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
  .btnToSaveResume:active, .btnToViewResume:active {
    box-shadow: 0 1px 2px 0 rgb(26 115 232 / 45%), 0 2px 6px 2px rgb(26 115 232 / 30%);
    background-color: #1a73e8 !important;
  }
  .linkToView {
    text-decoration: none;
    color: #fff;
  }
`

const BtnToSaveAndViewResume = () => {
    return (
        <StyledButtonToSaveResume>
            <button className={'btnToSaveResume'} type={'submit'}>Сохранить резюме</button>
            <button className={'btnToViewResume'} type={'button'}>
                <Link to={PATHS.preview(``)} className={'linkToView'}>Посмотреть резюме</Link>
            </button>
        </StyledButtonToSaveResume>
    )
}

export default BtnToSaveAndViewResume

