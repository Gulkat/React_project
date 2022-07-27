import React from 'react';
import styled from 'styled-components';


const StyledEducation = styled.div`
  font-family: 'Century Gothic';
  text-align: center;
  box-sizing: border-box;
  padding: 20px 70px 70px;

  .sectionName {
    color: #33334f;
    font-size: 50px;
    margin: 0;
  }
  .description {
    color: #7e8bc4;
    font-size: 22px;
    margin-bottom: 50px;
  }
  .addBtn {
    display: flex;
    align-items: center;
    padding: 13px 3px;
    border-top: 1px dashed rgb(191, 197, 214);
    border-bottom: 1px dashed rgb(191, 197, 214);
    text-align: left;
    font-family: "Century Gothic";
    font-size: 16px;
    color: rgb(22, 136, 254);
    font-weight: 400;
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-right: 0;
    border-left: 0;
    margin-bottom: 30px;
  }
  .addBtn:hover {
    background-color: rgba(0, 153, 218, 0.05);
    border-color: rgb(191, 197, 214);
  }
  .iconBtn {
    margin-right: 5px;
  }

`

const Education = () => {

    return (
        <StyledEducation>
            <h1 className={'sectionName'}>Введите информацию о вашем образовании</h1>
            <p className={'description'}>Сначала введите ваш последний диплом</p>
            <button className={'addBtn'}>
                <span className={'innerBtn'}>
                    <span className={'iconBtn'}>+</span>
                    <span className={'titleBtn'}>Добавить образование</span>
                </span>
            </button>
        </StyledEducation>
    )
}


export default Education