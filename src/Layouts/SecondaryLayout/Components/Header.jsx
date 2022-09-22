import React from 'react';
import styled from 'styled-components';
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";

import {PATHS, ROUTES} from "../../../constants/routes";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.div`
  height: 50px;
  width: 100%;
  background-color:${props => props.theme.accentColor};
  align-items: center;

  .headerNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    height: 100%;
  }
  }
  .headerMenu {
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }
  .headerItem {
    list-style-type: none;
    min-width: 113px;
    color: #fff;
    font-weight: 400;
    font-family: ${props => props.theme.baseFont};
    text-decoration: none;
  }

  .linkToView {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    font-family: ${props => props.theme.baseFont};
    text-decoration: none;
    margin: 0;
  }
  .linkToView:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        dispatch({type: 'userLogOut'});
        navigate(PATHS.login);
    };

    return (
        <StyledHeader>
            <nav className={'headerNav'}>
                <ul className={'headerMenu'}>
                    <li className={'headerItem'}>
                        <Link to={ROUTES.startPage} className={'linkToView'}>На главную</Link>
                    </li>
                    <li className={'headerItem'}>
                        <Link to={ROUTES.resumeList} className={'linkToView'}>Сохраненные резюме</Link>
                    </li>
                </ul>
                    <div className={'headerItem'} onClick={logOut}>
                        <p className={'linkToView'}>Выйти <FontAwesomeIcon icon={faArrowRightFromBracket}/></p>
                    </div>
            </nav>

        </StyledHeader>
    )
}

export default Header