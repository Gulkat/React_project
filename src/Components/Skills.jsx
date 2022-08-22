import React from 'react';
import styled from 'styled-components';

const StyledSkills = styled.div `
  font-family: 'Century Gothic';
  box-sizing: border-box;
  padding: 20px 50px 50px;

  .section {
    text-align: center;
  }

  .sectionName {
    color: #33334f;
    font-size: 35px;
    margin: 0;
  }
  .description {
    color: ${props => props.theme.accentColor};
    font-size: 20px;
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
    margin-bottom: 60px;
  }

  .addBtn:hover {
    background-color: rgba(0, 153, 218, 0.05);
    border-color: rgb(191, 197, 214);
  }

  .iconBtn {
    margin-right: 5px;
  }
`

const Skills = () => {

    return (
        <StyledSkills>
            <div className={'section'}>
                <h1 className={'sectionName'}>Расскажите о своих навыках</h1>
                <p className={'description'}>Начните с того, в котором вы наиболее опытны</p>
            </div>
            <button className={'addBtn'}>
                <span className={'innerBtn'}>
                    <span className={'iconBtn'}>+</span>
                    <span className={'titleBtn'}>Добавить навык</span>
                </span>
            </button>
            </StyledSkills>
    )
}


export default Skills