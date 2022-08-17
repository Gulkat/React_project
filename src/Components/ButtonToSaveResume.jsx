import React from 'react';
import styled from 'styled-components';

const StyledButtonToSaveResume = styled.div`
  text-align: center;
  margin-bottom: 50px;
  
  .btnToSaveResume {
    min-width: 250px;
    font-size: 20px;
    font-family: "Century Gothic";
    padding: 15px 20px;
    font-weight: 900;
    background: rgb(33, 150, 243);
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .btnToSaveResume:hover {
    background-color: rgb(22, 136, 254);
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  }
  .btnToSaveResume:focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
  }
`

const ButtonToSaveResume = () => {
    return (
        <StyledButtonToSaveResume>
            <button className={'btnToSaveResume'}>Сохранить резюме</button>
        </StyledButtonToSaveResume>
    )
}

export default ButtonToSaveResume

