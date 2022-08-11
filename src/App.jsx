import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobalThemeProvider from 'HOC/GlobalThemeProvider';
import RootRoute from 'Routes/RootRoute';
import GlobalErrorBoundary from 'HOC/GlobalErrorBoundary';
import GlobalThemeWrapper from "./HOC/GlobalThemeWrapper";


class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GlobalThemeWrapper>
                {/* <Provider>*/}
                <BrowserRouter>
                    <GlobalThemeProvider>
                        <GlobalErrorBoundary>
                            <RootRoute/>
                        </GlobalErrorBoundary>
                    </GlobalThemeProvider>
                </BrowserRouter>
                {/*</Provider>*/}
            </GlobalThemeWrapper>
        )
    }
}

export default App