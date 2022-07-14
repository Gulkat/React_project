import React, { useState } from 'react';
import styled from 'styled-components';

import {FONT} from 'constants/fontForm';

const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px 0;
  
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

function DropdownFont() {
    const arOptions = ['', 'Century Gothic', 'Century', 'Georgia', 'Garamond'];
    const [value, setValue] = useState('');

    const options = arOptions.map((text, index) => {
        return <option key={index} value={index}>{text}</option>;
    });

    return <StyledDropdown>
        <p className={'labelText'}>Шрифт оформления</p>
        <select value={value} onChange={(event) => setValue(event.target.value)} className={'selectValue'}>
            {options}
        </select>
    </StyledDropdown>;
}

export default DropdownFont;