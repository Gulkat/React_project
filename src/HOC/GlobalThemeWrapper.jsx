import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

styled.div``

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
    }
`

const GlobalThemeWrapper = (props) => {

    return (
        <React.Fragment>
            <GlobalStyle/>
            {props.children}
        </React.Fragment>
    )
}

export default GlobalThemeWrapper