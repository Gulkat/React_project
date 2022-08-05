import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobalThemeProvider from 'HOC/GlobalThemeProvider';
import RootRoute from './Routes/RootRoute';
import MainLayout from 'Layouts/MainLayout';
import Wrapper from 'Layouts/Components/Wrapper';
import GlobalErrorBoundary from "./HOC/GlobalErrorBoundary";

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <GlobalThemeProvider>
                    <GlobalErrorBoundary>
                        <RootRoute/>
                    </GlobalErrorBoundary>
                </GlobalThemeProvider>
            </BrowserRouter>
        )
    }
}

export default App