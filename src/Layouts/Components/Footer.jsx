import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #7e8bc4;
  height: 50px;
  width: 100%;
  text-align: center;
  line-height: 50px;
  
  .footerText {
    color: #fff;
    font-size: 23px;
    font-weight: 400;
    font-family: "Century Gothic";
    margin: 0;
  }
`

const Footer = () => {
    return (
        <StyledFooter>
            <p className={'footerText'}>И пусть удача всегда будет на вашей стороне!</p>
        </StyledFooter>
    )
}

export default Footer