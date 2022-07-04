import React from 'react';

import ResumeForm from 'Scenes/ResumeForm';
import Result from 'Scenes/Result';
import GlobalThemeProvider from 'HOC/GlobalThemeProvider';
import MainLayout from "./Layouts/MainLayout";

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'app'}>
                <GlobalThemeProvider>
                    <MainLayout>
                        <ResumeForm/>
                        <Result/>
                    </MainLayout>
                </GlobalThemeProvider>
            </div>
        )
    }
}

export default App