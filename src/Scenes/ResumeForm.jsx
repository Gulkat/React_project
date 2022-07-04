import React from 'react';

import PersonalDetails from 'Components/PersonalDetails';
import Result from '../Components/Result';
import Header from "../Components/Header";
import styled from 'styled-components';

export const MyContext = React.createContext('Oops error default value');

const StyledApp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StyledResumeForm = styled.div`
  margin-right: 50px;
  padding: 15px;
  background-color: #f7f7fc;
  
`

class ResumeForm extends React.PureComponent {
    constructor(props) {
        super(props);

        // this.state = {
        //     header: 'Создай своё идеальное резюме!',
        //
        // }
    }
    render() {
        return (
            <StyledApp className='app'>
                <StyledResumeForm>
                    <div>
                        <Header></Header>
                    </div>
                    <div className='body'>
                        <PersonalDetails>
                        </PersonalDetails>

                        <button onClick={(e) => {this.setState({header:'Not header'})}}>Click me!</button>
                    </div>
                    <div className='footer'></div>
                </StyledResumeForm>
                <Result>

                </Result>
            </StyledApp>
        )
    }

}

export default ResumeForm;
