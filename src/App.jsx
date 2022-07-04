import React from 'react';

import ResumeForm from 'Scenes/ResumeForm';
import GlobalThemeProvider from "./HOC/GlobalThemeProvider";
import Result from "./Components/Result";

class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'app'}>
                <GlobalThemeProvider>
                    <ResumeForm/>
                    <Result/>
                </GlobalThemeProvider>
            </div>
        )
    }
}

export default App