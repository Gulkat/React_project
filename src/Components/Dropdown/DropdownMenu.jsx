import React from 'react';
import styled from 'styled-components';

import FormikDropdown from './FormikDropdown';
import { COLOR } from "constants/colorForm";
import { FONT } from "constants/fontForm";

const StyledDropdownMenu = styled.div`
  padding: 20px 50px;
  
  .dropdownWrapper {
    display: flex;
    justify-content: space-around;
  }
`

const DropdownMenu = () => {
        return (
            <StyledDropdownMenu>
                <div className={'dropdownWrapper'}>
                    <FormikDropdown options={COLOR} idKey={'colorId'} nameKey={'name'} name={'color'} label={'Цвет оформления'}/>
                    <FormikDropdown options={FONT} idKey={'fontId'} nameKey={'name'} name={'font'} label={'Шрифт оформления'}/>
                </div>
            </StyledDropdownMenu>
        );
};

export default DropdownMenu;