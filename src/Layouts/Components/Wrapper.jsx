import React, {useState} from 'react';
import styled from "styled-components";

import ResumeForm from 'Scenes/ResmeForm/ResumeForm';
import Result from 'Scenes/Result';

const StyledWrapper = styled.div`
  height: calc(100vh - 150px);
  width: 100%;
  overflow: auto;
`

const Wrapper = () => {
    const [name, setName] = useState('');
    const [surName, setSurname] = useState('');
    const [jobTitle, setJopTitle] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [color,setColor] = useState('black');
    const [font, setFont] = useState('centery gothic');

    return (
        <StyledWrapper>
            <ResumeForm handleName={setName} handleSurname={setSurname} handleJobTitle={setJopTitle} handleUserEmail={setEmail} handleTelephone ={setTelephone} setColor={setColor} setFont={setFont}/>
            <Result userName={name} userSurname={surName} jobTitle={jobTitle} userEmail={email} telephone={telephone} color={color} font={font}/>
        </StyledWrapper>

    )
}

export default Wrapper