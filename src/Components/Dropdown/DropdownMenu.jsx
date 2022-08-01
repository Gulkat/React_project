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
        this.props.setColor(COLOR.find(color => color.colorId === colorId).hexNumber)
    }
    handleFontSelect(fontId) {
        this.props.setFont(FONT.find(font => font.fontId === fontId).font)
    }

    render() {
        return (
            <StyledDropdownMenu>
                <Dropdown options={COLOR} idKey={'colorId'} nameKey={'name'} handleSelect={this.handleColorSelect.bind(this)} label={'Цвет оформления'}/>
                <Dropdown options={FONT} idKey={'fontId'} nameKey={'name'} handleSelect={this.handleFontSelect.bind(this)} label={'Шрифт оформления'}/>
            </StyledDropdownMenu>
        )
    }
}

export default DropdownMenu