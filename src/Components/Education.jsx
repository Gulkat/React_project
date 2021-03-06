import React from 'react';
import styled from 'styled-components';


const StyledEducation = styled.div`
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
    color: #7e8bc4;
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

  .form_box {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: -18px;
    margin-right: -18px;
    margin-bottom: 30px;
  }

  .box {
    margin-bottom: 35px;
    position: relative;
    padding-left: 18px;
    padding-right: 18px;
    flex-grow: 0;
    flex-shrink: 0;
    width: 46%;
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

  .input {
    position: relative;
    width: 90%;
    overflow: hidden;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.2px;
    border-radius: 3px;
    border: 2px solid rgb(230, 230, 255);
    background-color: rgb(255, 255, 255);
    padding: 13px 35px 9px 16px;
    color: rgb(72, 72, 112);
    font-family: "Century Gothic";
  }

  .boxDescription {
    margin-bottom: 35px;
    position: relative;
    padding-left: 18px;
    padding-right: 18px;
    flex-grow: 0;
    flex-shrink: 0;
    width: 101.5%;
  }

  .inputDescription {
    position: relative;
    width: 90%;
    height: 170px;
    overflow: hidden;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.2px;
    border-radius: 3px;
    border: 2px solid rgb(230, 230, 255);
    background-color: rgb(255, 255, 255);
    padding: 13px 35px 9px 16px;
    color: rgb(72, 72, 112);
    font-family: "Century Gothic";
  }
  `
const StyledFooterBtn = styled.div ` 
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

const Education = () => {

    return (
        <StyledEducation>
            <div className={'section'}>
                <h1 className={'sectionName'}>?????????????? ???????????????????? ?? ?????????? ??????????????????????</h1>
                <p className={'description'}>?????????????? ?????????????? ?????? ?????????????????? ????????????</p>
            </div>
            <button className={'addBtn'}>
                <span className={'innerBtn'}>
                    <span className={'iconBtn'}>+</span>
                    <span className={'titleBtn'}>???????????????? ??????????????????????</span>
                </span>
            </button>

            <form className={'form'}>
                <div className={'form_box'}>
                    <div className={'box'}>
                        <label className={'label'}><span>?????????????? ??????????????????</span>
                            <div className={'overlay_background'}></div>
                        </label>
                        <input className={'input'} type={'text'}/>
                    </div>
                    <div className={'box'}>
                        <label className={'label'}><span>??????????????</span>
                            <div className={'overlay_background'}></div>
                        </label>
                        <input className={'input'} type={'text'}/>
                    </div>
                    <div className={'box'}>
                        <label className={'label'}><span>???????? ??????????????????</span>
                            <div className={'overlay_background'}></div>
                        </label>
                        <input className={'input'} type={'text'} placeholder={'???????????????? ????????'}/>
                    </div>
                    <div className={'box'}>
                        <label className={'label'}><span>??????????</span>
                            <div className={'overlay_background'}></div>
                        </label>
                        <input className={'input'} type={'text'}/>
                    </div>
                    <div className={'boxDescription'}>
                        <label className={'label'}><span>????????????????</span>
                            <div className={'overlay_background'}></div>
                        </label>
                        <input className={'inputDescription'} type={'text'}/>
                    </div>
                </div>
            </form>
            <StyledFooterBtn className={'footer'}>
                <button className={'btnBack'}><span className={'iconBack'}>????</span>??????????</button>
                <button className={'btnNext'}>?????????????? ?? ???????????? <span className={'iconNext'}>????</span></button>
            </StyledFooterBtn>
        </StyledEducation>
    )
}


export default Education