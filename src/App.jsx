import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalThemeProvider from 'HOC/GlobalThemeProvider';
import MainLayout from './Layouts/MainLayout';
import RootRoute from './Routes/RootRoute';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'app'}>
                <BrowserRouter>
                    <GlobalThemeProvider>
                        <MainLayout>
                            <RootRoute/>
                        </MainLayout>
                    </GlobalThemeProvider>
                </BrowserRouter>
            </div>
        )
    }
}

export default App