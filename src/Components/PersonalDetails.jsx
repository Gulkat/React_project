import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPersonalDetails = styled.div`
  padding-left: 50px;
  font-family: 'Berlin Sans FB';
  
  .sectionName {
    color: #33334f;
    font-size: 50px;
    margin: 50px 0 15px 0;
  }
  .description {
    color: #7e8bc4;
    font-size: 22px;
    margin-bottom: 30px;
  }
  .form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
    left: 31px;
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
    display: block;
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
    box-shadow: none
  }
`

class PersonalDetails extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            sectionName: 'Введите контактную информацию',
            description: 'Это позволит работодателю узнать, как с вами можно связаться',

        }
    }

    render() {
        return (
            <StyledPersonalDetails>
                <h1 className={'sectionName'}>{this.state.sectionName}</h1>
                <p className={'description'}>{this.state.description}</p>
                <form className={'form'}>
                    <div className={'box'}>
                        <label className={'label'}><span>Имя</span>
                        <div className={'overlay_background'}></div>
                        </label>
                        <input className={'input'} type={'text'}/>
                    </div>
                    <div className={'box'}>
                        <label className={'label'}><span>Фамилия</span>
                        <div className={'overlay_background'}></div>
                        </label>
                        <input className={'input'} type={'text'}/>
                    </div>
                    <div className={'box'}>
                        <label className={'label'}><span>Электронная почта</span>
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
                </form>
            </StyledPersonalDetails>

        )
    }
}

export default PersonalDetails;
