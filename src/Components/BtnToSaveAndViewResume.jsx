import React from 'react';
import styled from 'styled-components';
import Result from "../Scenes/Result";
import {Link} from "react-router-dom";
import {ROUTES} from "../constants/routes";

const StyledButtonToSaveResume = styled.div`
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  
  .btnToSaveResume {
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
  .btnToViewResume {
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
  .btnToSaveResume:hover {
    background-color: rgb(22, 136, 254);
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
  .btnToViewResume:hover {
    background-color: rgb(22, 136, 254);
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
  .btnToSaveResume:focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
  }
  .linkToView {
    text-decoration: none;
    color: #fff;
  }
  .btnToViewResume:focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
  }
`

const BtnToSaveAndViewResume = () => {
    return (
        <StyledButtonToSaveResume>
            <button className={'btnToSaveResume'} type={'submit'}>Сохранить резюме</button>
            <button className={'btnToViewResume'}>
                <Link to={ROUTES.preview} className={'linkToView'}>Посмотреть резюме</Link>
            </button>
        </StyledButtonToSaveResume>
    )
}

export default BtnToSaveAndViewResume

