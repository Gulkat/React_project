import React, {useState} from 'react';

import ResumeForm from 'Scenes/ResmeForm/ResumeForm';
import Result from 'Scenes/Result';

const Wrapper = () => {
    const [name, setName] = useState('');
    const [surName, setSurname] = useState('');
    const [jobTitle, setJopTitle] = useState('')
    const [color,setColor] = useState('black');
    const [font, setFont] = useState('centery gothic');

    return (
        <React.Fragment>
            <ResumeForm handleName={setName} handleSurname={setSurname} handleJobTitle={setJopTitle} setColor={setColor} setFont={setFont}/>
            <Result userName={name} userSurname={surName} jobTitle={jobTitle} color={color} font={font}/>
        </React.Fragment>

    )
}

export default Wrapper