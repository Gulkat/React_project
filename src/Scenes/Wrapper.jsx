import React, {useState} from 'react';

import ResumeForm from 'Scenes/ResmeForm/ResumeForm';
import Result from 'Scenes/Result';

const Wrapper = () => {
    const [name, setName] = useState('');
    const [color,setColor] = useState('black');
    const [font, setFont] = useState('centery gothic');

    const handleChange = text => {
        setName(text);
    };

    return (
        <React.Fragment>
            <ResumeForm handle={handleChange} setColor={setColor} setFont={setFont}/>
            <Result userName={name} color={color} font={font}/>
        </React.Fragment>

    )
}

export default Wrapper