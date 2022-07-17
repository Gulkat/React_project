import React, {useState} from 'react';
import styled from 'styled-components';

import PersonalDetails from 'Components/PersonalDetails';
import Header from 'Components/Header';
import Dropdown from 'Components/Dropdown/Dropdown';
import Employment from 'Components/Employment';
import Education from 'Components/Education'

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

function ResumeForm ({handle}) {

    const handleClick = text => {
        handle(text)
    };
    return (
        <StyledResumeForm>
            <div>
                <Header/>
            </div>
            <div className='body'>
                <Dropdown/>
                <PersonalDetails handleClick={handleClick} />
                <Employment/>
                <Education/>
            </div>
            <div className='footer'></div>
        </StyledResumeForm>
    )
}

export default ResumeForm;
