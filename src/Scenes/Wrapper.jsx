import React, {useState} from 'react';

import ResumeForm from 'Scenes/ResumeForm';
import Result from 'Scenes/Result';

const Wrapper = () => {
    const [name, setName] = useState('');

    const handleChange = text => {
        setName(text);
    };

    return (
        <div>
            <ResumeForm handle={handleChange} />
            <Result userName={name} />
        </div>
    )
}

export default Wrapper