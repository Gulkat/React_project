import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

import {ROUTES} from "../../constants/routes";

const StyledHeader = styled.div`
  height: 50px;
  background-color:#7e8bc4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .loginLink {
    color: #fff;
    font-size: 26px;
    font-weight: 400;
    font-family: "Century Gothic";
    text-decoration: none;
    width: 50px;
    padding-right: 100px;
  }
  .themeIcon {
    width: 50px;
    padding-left: 100px;
  }
`

const Header = () => {

    return (
        <StyledHeader>
            <div className={'themeIcon'}>
                <button className={'themeBtn'}>Dark Theme</button>
            </div>
            <Link to={ROUTES.loginPage} className={'loginLink'}>Войти</Link>
        </StyledHeader>
    )
}

export default Header