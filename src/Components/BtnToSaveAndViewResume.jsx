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
    min-width: 250px;
    font-size: 20px;
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
  .btnToSaveResume:focus, .btnToViewResume:focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
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
                <Link to={PATHS.preview} className={'linkToView'}>Посмотреть резюме</Link>
            </button>
        </StyledButtonToSaveResume>
    )
}

export default BtnToSaveAndViewResume

