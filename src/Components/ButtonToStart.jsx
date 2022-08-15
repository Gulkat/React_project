import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {ROUTES} from "../constants/routes";

const StyledButtonToStart = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: #f7f7fc;

  .start{
    margin-top: 300px ;
    padding: 15px;
    font-weight: 900;
    border: none;
    background-color: #7e8bc4;
    width: 250px;
    font-family: Century Gothic;
    font-size: 30px;
    cursor: pointer;
    will-change: box-shadow;
    border-radius: 4px;
  }
  .start:hover {
    background-color: #7181c7;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
  .linkToStart {
    text-decoration: none;
    color: #fff;
  }
  .linkToView {
    margin-top: 70px ;
    padding: 20px;
    font-weight: 900;
    border: none;
    font-family: Century Gothic;
    font-size: 30px;
    cursor: pointer;
    text-decoration: none;
    color: #7181c7;
  }
  .linkToView:visited {
    color: #7181c7;
  }
  .linkToView:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    border-radius: 4px;
  }
  
 
`

const ButtonToStart = () => {
    return (
        <StyledButtonToStart>
            <button className={'start'}>
                <Link to={ROUTES.newResume} className={'linkToStart'}>Начать</Link>
            </button>
                <Link to={ROUTES.resumeList} className={'linkToView'}>Посмотреть сохраненные резюме</Link>
        </StyledButtonToStart>
    )
}

export default ButtonToStart