import React, {useState} from 'react';
import styled from 'styled-components';

import Dropdown from "./Dropdown";
import {COLOR} from "constants/colorForm";
import {FONT} from "constants/fontForm";

const StyledDropdownMenu = styled.div`
  padding: 20px 50px;
  
  .dropdownWrapper {
    display: flex;
    justify-content: space-around;
  }
`

const DropdownMenu = () => {
    const [color, setColor] = useState();
    const [font, setFont] = useState();

    const handleColorSelect = (colorId) => {
        setColor(COLOR.find(color => color.colorId === colorId).hexNumber)
    };
    const handleFontSelect = (fontId) => {
        setFont(FONT.find(font => font.fontId === fontId).font)
    };

        return (
            <StyledDropdownMenu>
                <div className={'dropdownWrapper'}>
                    <Dropdown options={COLOR} idKey={'colorId'} nameKey={'name'} handleSelect={handleColorSelect} name={'color'} label={'Цвет оформления'}/>
                    <Dropdown options={FONT} idKey={'fontId'} nameKey={'name'} handleSelect={handleFontSelect} name={'font'} label={'Шрифт оформления'}/>
                </div>
            </StyledDropdownMenu>
        );
};

export default DropdownMenu;