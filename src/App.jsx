import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'store/initStore';
import { PersistGate } from "redux-persist/integration/react";
import GlobalThemeProvider from 'HOC/GlobalThemeProvider';
import GlobalErrorBoundary from 'HOC/GlobalErrorBoundary';
import GlobalThemeWrapper from 'HOC/GlobalThemeWrapper';
import Loading from 'Components/Loading';
import LoginRoute from './Routes/LoginRouter';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GlobalThemeWrapper>
                 <Provider store={store}>
                     <PersistGate loading={<Loading/>} persistor={persistor}>
                         <BrowserRouter>
                             <GlobalErrorBoundary>
                                 <LoginRoute/>
                             </GlobalErrorBoundary>
                         </BrowserRouter>
                     </PersistGate>
                </Provider>
            </GlobalThemeWrapper>
        )
    }
}

export default App