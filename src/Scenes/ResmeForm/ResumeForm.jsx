import React, {useState} from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

import PersonalDetails from 'Components/PersonalDetails';
import Header from 'Scenes/ResmeForm/Components/Header';
import Employment from 'Components/Employment';
import Education from 'Components/Education'
import DropdownMenu from 'Components/Dropdown/DropdownMenu';
import Skills from 'Components/Skills';
import Summary from 'Components/Summary';
import ButtonToSaveResume from '../../Components/ButtonToSaveResume';

const StyledResumeForm = styled.div`
  padding: 0;
  background-color: #f7f7fc;
  height: calc(100vh - 100px);
  width: 50%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  left: 0;
`

const ResumeForm = ({handleName, handleSurname, handleJobTitle, handleUserEmail, handleTelephone, setColor, setFont}) => {

    const setValueName = text => {
        handleName(text)
    };
    const setValueSurname = text => {
        handleSurname(text)
    };
    const setValueJobTitle = text => {
        handleJobTitle(text)
    };
    const setValueUserEmail = text => {
        handleUserEmail(text)
    };
    const setValueTelephone = text => {
        handleTelephone(text)
    };

    return (
        <StyledResumeForm>
            <header>
                <Header/>
            </header>
            <main>
                <DropdownMenu setColor={setColor} setFont={setFont}/>
                <PersonalDetails setValueName={setValueName} setValueSurname={setValueSurname} setValueJobTitle={setValueJobTitle} setValueUserEmail={setValueUserEmail} setValueTelephone={setValueTelephone}/>
                <Employment/>
                <Education/>
                <Skills/>
                <Summary/>
                <ButtonToSaveResume/>
            </main>
        </StyledResumeForm>
    )
}

export default ResumeForm;
