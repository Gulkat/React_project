import React, {useState} from 'react';
import styled from 'styled-components';

import PersonalDetails from 'Components/PersonalDetails';
import Header from 'Components/Header';
import Employment from 'Components/Employment';
import Education from 'Components/Education'
import DropdownMenu from "Components/Dropdown/DropdownMenu";
import Skills from "../Components/Skills";
import Summary from "../Components/Summary";

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

function ResumeForm ({handle}) {

    const getValue = text => {
        handle(text)
    };
    return (
        <StyledResumeForm>
            <div>
                <Header/>
            </div>
            <div className='body'>
                <DropdownMenu/>
                <PersonalDetails getValue={getValue} />
                <Employment/>
                <Education/>
                <Skills/>
                <Summary/>
            </div>
            <div className='footer'></div>
        </StyledResumeForm>
    )
}

export default ResumeForm;
