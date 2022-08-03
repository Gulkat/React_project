import React, {useState} from 'react';
import styled from 'styled-components';

import PersonalDetails from 'Components/PersonalDetails';
import Header from 'Scenes/ResmeForm/Components/Header';
import Employment from 'Components/Employment';
import Education from 'Components/Education'
import DropdownMenu from 'Components/Dropdown/DropdownMenu';
import Skills from 'Components/Skills';
import Summary from 'Components/Summary';

export const MyContext = React.createContext('Oops error default value');

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

function ResumeForm ({handle, setColor, setFont}) {
    // const [renderComponents, setRenderComponents] = useState('');

    const getValue = text => {
        handle(text)
    };
    return (
        <StyledResumeForm>
            <header>
                <Header/>
            </header>
            <main>
                <DropdownMenu setColor={setColor} setFont={setFont}/>
                <PersonalDetails getValue={getValue}/>
                <Employment/>
                <Education/>
                <Skills/>
                <Summary/>
            </main>
            <footer></footer>
        </StyledResumeForm>
    )
}

export default ResumeForm;
