import React, {useState} from 'react';

import ResumeForm from 'Scenes/ResumeForm';
import Result from 'Scenes/Result';
import PersonalDetails from "../Components/PersonalDetails";

const Wrapper = () => {
    const [name, setName] = useState('')

    const handleNameChange = (name) => {
        setName(name)
    }

    return (
        <div>
            <ResumeForm onChange={handleNameChange}/>
            <Result name={name}/>
        </div>
    )
}

export default Wrapper