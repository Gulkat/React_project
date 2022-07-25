import React, {useState} from 'react';
import styled from 'styled-components';

import Footer from "./Footer";

const StyledPersonalDetails = styled.div`
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

  .form {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    width: 100%;
    margin-bottom: 30px;
  }

  .box {
    width: 50%;
    margin-bottom: 35px;
    position: relative;
  }

  .label {
    padding: 0 5px;
    position: absolute;
    top: -8px;
    left: 80px;
    z-index: 1;
    font-size: 15px;
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

  .input {
    position: relative;
    width: 50%;
    overflow: hidden;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.2px;
    border-radius: 3px;
    border: 2px solid rgb(230, 230, 255);
    background-color: rgb(255, 255, 255);
    padding: 13px 35px 9px 16px;
    color: rgb(72, 72, 112);
    box-shadow: none;
    min-width: 270px;
  }
`

function  PersonalDetails ({getValue}) {

    return (
        <StyledPersonalDetails>
            <h1 className={'sectionName'}>Введите контактную информацию</h1>
            <p className={'description'}>Это позволит работодателю узнать, как с вами можно связаться</p>
            <form className={'form'}>
                <div className={'box'}>
                    <label className={'label'}><span>Имя</span>
                        <div className={'overlay_background'}></div>
                    </label>
                    <input className={'input'} type={'text'}  onChange={event => getValue(event.target.value)} />
                </div>
                <div className={'box'}>
                    <label className={'label'}><span>Фамилия</span>
                        <div className={'overlay_background'}></div>
                    </label>
                    <input className={'input'} type={'text'}/>
                </div>
                <div className={'box'}>
                    <label className={'label'}><span>Email</span>
                        <div className={'overlay_background'}></div>
                    </label>
                    <input className={'input'} type={'text'}/>
                </div>
                <div className={'box'}>
                    <label className={'label'}><span>Телефон</span>
                        <div className={'overlay_background'}></div>
                    </label>
                    <input className={'input'} type={'text'}/>
                </div>
                <div className={'box'}>
                    <label className={'label'}><span>Город</span>
                        <div className={'overlay_background'}></div>
                    </label>
                    <input className={'input'} type={'text'}/>
                </div>
                <div className={'box'}>
                    <label className={'label'}><span>Должность</span>
                        <div className={'overlay_background'}></div>
                    </label>
                    <input className={'input'} type={'text'}/>
                </div>
            </form>
            <Footer/>
        </StyledPersonalDetails>
    )
}

export default PersonalDetails;
