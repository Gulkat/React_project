import React from "react";
import styled from "styled-components";

const StyledFooterBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .btnBack {
    width: auto;
    cursor: pointer;
    will-change: box-shadow;
    border-radius: 4px;
    background: transparent;
    border: 0;
    font-weight: 900;
    font-family: Century Gothic;
    font-size: 20px;
    color: rgb(113, 113, 166);
    display: flex;
  }
  .btnBack:hover {
    color: rgb(0, 153, 218);
  }
  .iconBack {
    margin-right: 10px;
  }
  .btnNext {
    padding: 15px;
    font-weight: 900;
    position: relative;
    border: none;
    background: rgb(33, 150, 243);
    color: rgb(255, 255, 255);
    width: auto;
    font-family: Century Gothic;
    font-size: 20px;
    cursor: pointer;
    will-change: box-shadow;
    border-radius: 4px;
  }
  .btnNext:hover {
    background-color: rgb(22, 136, 254);
  }
  .iconNext {
    margin-left: 10px;
  }
`

const Footer = () => {
    return (
        <StyledFooterBtn className={'footer'}>
            <button className={'btnBack'}><span className={'iconBack'}>🠄</span>Назад</button>
            <button className={'btnNext'}>Перейти к опыт <span className={'iconNext'}>🠆</span></button>
        </StyledFooterBtn>
    )

}

export default Footer