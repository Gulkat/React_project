import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: ${props => props.theme.accentColor};
  height: 30px;
  width: 100%;
  text-align: center;
  line-height: 30px;
  
  .footerText {
    color: #fff;
    font-size: 19px;
    font-weight: 400;
    font-family: ${props => props.theme.baseFont};
    margin: 0;
  }
`

const Footer = () => {
    return (
        <StyledFooter>
            <p className={'footerText'}>И пусть удача всегда будет на вашей стороне!</p>
        </StyledFooter>
    );
};

export default Footer;