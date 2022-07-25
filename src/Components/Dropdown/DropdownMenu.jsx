import React from 'react';
import styled from 'styled-components';

import Dropdown from "./Dropdown";
import {COLOR} from "constants/colorForm";
import {FONT} from "constants/fontForm";

const StyledDropdownMenu = styled.div`
  display: flex;
  justify-content: center;
`

class DropdownMenu extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    handleColorSelect(colorId) {
        setNewTextColor(COLOR.find(color => colorId === colorId).hexNumber)
    }
    handleFontSelect(fontId) {
        setNewTextFont(FONT.find(font => fontId === fontId).font)
    }

    render() {
        return (
            <StyledDropdownMenu>
                <Dropdown options={COLOR} idKey={'colorId'} nameKey={'name'} handleSelect={this.handleColorSelect} label={'Цвет оформления'}/>
                <Dropdown options={FONT} idKey={'fontId'} nameKey={'name'} handleSelect={this.handleFontSelect} label={'Шрифт оформления'}/>
            </StyledDropdownMenu>
        )
    }
}

export default DropdownMenu