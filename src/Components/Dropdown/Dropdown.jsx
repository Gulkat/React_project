import React from 'react';
import styled from 'styled-components';

import DropdownColor from "./DropdownColor";
import DropdownFont from "./DropdownFont";

const StyledDropdownMenu = styled.div`
  display: flex;
  justify-content: center;
`

class Dropdown extends React.PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <StyledDropdownMenu>
                <DropdownColor/>
                <DropdownFont/>
            </StyledDropdownMenu>
        )
}
}

export default Dropdown