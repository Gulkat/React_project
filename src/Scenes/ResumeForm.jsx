import React from 'react';
import styled from 'styled-components';

import PersonalDetails from 'Components/PersonalDetails';
import Header from 'Components/Header';
import Dropdown from 'Components/Dropdown';


export const MyContext = React.createContext('Oops error default value');

const StyledResumeForm = styled.div`
  padding: 0;
  background-color: #f7f7fc;
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  left: 0;
`

/**
 * @example
 *
 */

class ResumeForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            resumeForm: [],
        }
    }

    addPersonalDetails(detailsData) {
        this.setState(state => {return({ResumeForm: [...state.ResumeForm, detailsData]})});
    }

    render() {
        const {resumeForm} = this.state
        return (
                <StyledResumeForm>
                    <div>
                        <Header/>
                    </div>
                    <div className='body'>
                        <Dropdown/>
                        {!!resumeForm.length &&
                            resumeForm.map(form => (
                                <PersonalDetails {...form}/>
                            ))
                        }
                    </div>
                    <div className='footer'></div>
                </StyledResumeForm>
        )
    }

}

export default ResumeForm;
