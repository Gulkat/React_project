import React from 'react';

import ResumeForm from 'Scenes/ResumeForm';
import Result from 'Scenes/Result';
import GlobalThemeProvider from 'HOC/GlobalThemeProvider';
import MainLayout from './Layouts/MainLayout';
import Wrapper from './Scenes/Wrapper';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'app'}>
                <GlobalThemeProvider>
                    <MainLayout>
                        <Wrapper/>
                    </MainLayout>
                </GlobalThemeProvider>
            </div>
        )
    }
}

export default App