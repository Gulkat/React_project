import React from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 50px 0;
  margin-right: 100px;
  
  .labelText {
    font-family: 'Century Gothic';
    color: #7e8bc4;
    font-size: 22px;
    min-width: 240px;
    text-align: center;
  }

  .selectValue {
    font-size: 22px;
    font-family: 'Century Gothic';
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 rgba(255, 255, 255, .9) inset, 0 1px 3px rgba(0, 0, 0, .1);
    border-radius: 3px;
    min-width: 190px;
    width: 100%;
  }
`

function Dropdown({options, nameKey, idKey, handleSelect, label, value}) {

    return <StyledDropdown>
        <p className={'labelText'}>{label}</p>
        <select value={value} onChange={(event) => handleSelect(event.target.value)} className={'selectValue'}>
            {options.map(option => {
                return <option key={option[idKey]} value={option[idKey]}>{option[nameKey]}</option>;
            })};
        </select>
    </StyledDropdown>;
}

export default Dropdown;