import React from 'react';
import styled from 'styled-components';
import Footer from "./Footer";

const StyledEmployment = styled.div`
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
  .boxDate {
    display: flex;
    position: relative;
  }
  .inputDate {
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
  }
  .labelDateStart {
    padding: 0 5px;
    position: absolute;
    top: -8px;
    left: 40px;
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
  .labelDateFinish {
    padding: 0 5px;
    position: absolute;
    top: -8px;
    left: 260px;
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
  .aaa {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-content: center;
    
  }
  

`

const Employment = () => {

    return (
        <StyledEmployment>
            <h1 className={'sectionName'}>Расскажите о своем опыте</h1>
            <p className={'description'}>Начните с вашей недавней работы</p>
            <button className={'addBtn'}>
                <span className={'innerBtn'}>
                    <span className={'iconBtn'}>+</span>
                    <span className={'titleBtn'}>Добавить работу</span>
                </span>
            </button>

            <form className={'form'}>
                <div className={'box'}>
                    <label className={'label'}><span>Должность</span>
                        <div className={'overlay_background'}></div>
                    </label>
                    <input className={'input'} type={'text'}/>
                </div>
                <div className={'box'}>
                    <label className={'label'}><span>Работодатель</span>
                        <div className={'overlay_background'}></div>
                    </label>
                    <input className={'input'} type={'text'}/>
                </div>
                <div className={'aaa'}>
                <div className={'boxDate'}>
                    <div className={'dateStart'}>
                        <label className={'labelDateStart'}><span>Дата начала</span>
                            <div className={'overlay_background'}></div>
                        </label>
                        <input className={'inputDate'} type={'text'}/>
                    </div>
                    <div className={'dateFinish'}>
                        <label className={'labelDateFinish'}><span>Дата окончания</span>
                            <div className={'overlay_background'}></div>
                        </label>
                        <input className={'inputDate'} type={'text'}/>
                    </div>
                </div>
                <div className={'box'}>
                    <label className={'label'}><span>Город</span>
                        <div className={'overlay_background'}></div>
                    </label>
                    <input className={'input'} type={'text'}/>
                </div>
                </div>
            </form>
            <Footer></Footer>

        </StyledEmployment>
    )
}


export default Employment