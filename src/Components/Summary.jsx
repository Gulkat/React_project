import React from 'react';
import styled from 'styled-components';

const StyledSummary = styled.div `
  font-family: 'Century Gothic';
  box-sizing: border-box;
  padding: 20px 50px 25px;

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
  
  .boxDescription {
    margin-bottom: 35px;
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
  }
  
  .label {
    padding: 0 5px;
    position: absolute;
    top: -8px;
    left: 30px;
    z-index: 1;
    font-size: 12px;
    letter-spacing: 0.2px;
    text-align: center;
    background: #f7f7fc;
    color: #33334f;
    text-transform: uppercase;
    display: block;
    line-height: 20px;
    margin-bottom: calc(8px);
  }

  span {
    position: relative;
    z-index: 10;
  }

  .overlay_background {
    background: white;
    width: 100%;
    position: absolute;
    top: 10px;
    height: 10px;
    left: 0;
  }

  .inputDescription {
    position: relative;
    width: 94%;
    overflow: hidden;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    border-radius: 3px;
    border: 2px solid rgb(230, 230, 255);
    background-color: rgb(255, 255, 255);
    color: rgb(72, 72, 112);
    font-family: "Century Gothic";
    padding: 20px 20px 200px 20px;
  }
`

const Summary = () => {

    return (
        <StyledSummary>
            <div className={'section'}>
                <h1 className={'sectionName'}>Расскажите о себе</h1>
                <p className={'description'}>Напишите 2-4 предложения о себе, чтобы заинтересовать работодателя</p>
            </div>
            <div className={'boxDescription'}>
                <label className={'label'}><span>Краткая информация</span>
                    <div className={'overlay_background'}></div>
                </label>
                <input className={'inputDescription'} type={'text'}/>
            </div>


        </StyledSummary>
    )
}


export default Summary