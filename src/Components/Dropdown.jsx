import React from 'react';
import styled from 'styled-components';
import PersonalDetails from "./PersonalDetails";

const StyledDropdown = styled.form`
  padding: 50px 0 20px 50px;

  .labelText {
    font-family: "Century Gothic";
    color: #7e8bc4;
    font-size: 22px;
    margin-right: 20px;
  }

  .selectValue {
    margin-left: 20px;
    font-size: 22px;
    font-family: "Century Gothic";
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 rgba(255, 255, 255, .9) inset, 0 1px 3px rgba(0, 0, 0, .1);
    border-radius: 3px;
  }

  .button {
    font-size: 22px;
    font-family: "Century Gothic";
    border: 2px solid #a9b4e5;
    border-radius: 5px;
    background-color: #a9b4e5;
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06)
  }

`

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
    };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    add() {<PersonalDetails/>}

    render() {
        return (
            <StyledDropdown>
                <label className={'labelText'}>
                    Выберете поля для заполнения:
                    <select className={'selectValue'}>
                        <option value='personalDetails'>Контакты</option>
                        <option value='summery'>Опыт</option>
                        <option value='education'>Образование</option>
                        <option value='skills'>Навыки</option>
                        <option value='about'>Об</option>
                    </select>
                </label>
                <input className={'button'} type='submit' value='Выбрать' onClick={() => this.add()}/>
            </StyledDropdown>
        );
    }
}



export default Dropdown;