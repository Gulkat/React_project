import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

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
            <ThemeProvider theme={{baseBackgroundColor: '#f7f7fc', accentColor:'#7e8bc4'}}>
                <GlobalStyle/>
                {props.children}
            </ThemeProvider>
        </React.Fragment>
    )
}

export default GlobalThemeWrapper