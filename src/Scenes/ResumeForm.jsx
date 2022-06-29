import React from 'react';

import PersonalDetails from 'Components/PersonalDetails';

export const MyContext = React.createContext('Oops error default value');

class ResumeForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            header: 'Создай своё идеальное резюме!',

        }
    }
    render() {
        return (
            <div className='app'>
                <div className='header'>
                    {this.state.header}
                </div>
                <div className='body'>
                    <MyContext.Provider value={'Personal Details'}>
                        <PersonalDetails/>
                    </MyContext.Provider>
                    <button onClick={(e) => {this.setState({header:'Not header'})}}>Click me!</button>
                </div>
                <div className='footer'></div>
            </div>
        )
    }

}

export default ResumeForm
