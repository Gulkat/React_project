import React from 'react';
import styled from 'styled-components';
import {Link, useNavigate} from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { PATHS } from "../constants/routes";
import {useDispatch} from "react-redux";
import {clearResumeAction, clearResumeData} from "../store/actions/CVReducer";

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
    background-color: ${props => props.theme.accentColor};
    color: #fff;
    font-family: ${props => props.theme.baseFont};
    font-size: 30px;
    cursor: pointer;
    will-change: box-shadow;
    border-radius: 4px;
  }
  .start:hover {
    background-color: #7181c7;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
  .linkToView {
    margin-top: 70px ;
    padding: 20px;
    font-weight: 900;
    border: none;
    font-family: ${props => props.theme.baseFont};
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

const StartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <StyledButtonToStart>
            <button className={'start'} onClick={(formValues) => {
                dispatch(clearResumeAction(formValues));
                navigate(PATHS.constructor('new'))}}>
                Создать новое резюме
            </button>
                <Link to={ROUTES.resumeList} className={'linkToView'}>Посмотреть сохраненные резюме</Link>
        </StyledButtonToStart>
    );
};

export default StartPage;