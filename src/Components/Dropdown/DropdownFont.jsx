import React, { useState } from 'react';
import styled from 'styled-components';

import {COLOR} from 'constants/colorForm';

const StyledDropdown = styled.div`
  padding: 50px 0 20px 50px;
  
  .labelText {
    font-family: 'Century Gothic';
    color: #7e8bc4;
    font-size: 22px;
    margin-right: 20px;
  }

  .selectValue {
    margin-left: 20px;
    font-size: 22px;
    font-family: 'Century Gothic';
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 rgba(255, 255, 255, .9) inset, 0 1px 3px rgba(0, 0, 0, .1);
    border-radius: 3px;
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