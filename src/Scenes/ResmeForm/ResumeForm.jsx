import React, {useState} from 'react';
import styled from 'styled-components';

import PersonalDetails from 'Components/PersonalDetails';
import Header from 'Scenes/ResmeForm/Components/Header';
import Employment from 'Components/Employment';
import Education from 'Components/Education'
import DropdownMenu from 'Components/Dropdown/DropdownMenu';
import Skills from 'Components/Skills';
import Summary from 'Components/Summary';

const StyledResumeForm = styled.div`
  padding: 0;
  background-color: #f7f7fc;
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  left: 0;
`

function ResumeForm ({handleName, handleSurname, handleJobTitle, setColor, setFont}) {

    const getValueName = text => {
        handleName(text)
    };
    const getValueSurname = text => {
        handleSurname(text)
    };
    const getValueJobTitle = text => {
        handleJobTitle(text)
    };

    return (
        <StyledResumeForm>
            <header>
                <Header/>
            </header>
            <main>
                <DropdownMenu setColor={setColor} setFont={setFont}/>
                <PersonalDetails getValueName={getValueName} getValueSurname={getValueSurname} getValueJobTitle={getValueJobTitle}/>
                <Employment/>
                <Education/>
                <Skills/>
                <Summary/>
            </main>
        </StyledResumeForm>
    )
}

export default ResumeForm;
