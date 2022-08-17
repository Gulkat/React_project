import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

import {ROUTES} from "../../constants/routes";

const StyledHeader = styled.div`
  height: 50px;
  width: 100%;
  background-color:#7e8bc4;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: #fff;
    font-family: "Century Gothic";
    font-size: 23px;
    font-weight: 400;
  }
  
  .loginLink {
    color: #fff;
    font-size: 26px;
    font-weight: 400;
    font-family: "Century Gothic";
    text-decoration: none;
    padding-right: 100px;
  }
  .loginLink:hover {
    opacity: 0.6;
  }
  .themeIcon {
    padding-left: 100px;
  }
`

const Header = () => {

    return (
        <StyledHeader>
            <div className={'themeIcon'}>
                <button className={'themeBtn'}>Dark Theme</button>
            </div>
            <p className={'logo'}>Создай своё идеальое резюме!</p>
            <Link to={ROUTES.loginPage} className={'loginLink'}>Войти 🠆 </Link>
        </StyledHeader>
    )
}

export default Header