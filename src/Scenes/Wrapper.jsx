import React, {useState} from 'react';

import ResumeForm from 'Scenes/ResumeForm';
import Result from 'Scenes/Result';

const Wrapper = () => {
    const [name, setName] = useState('');
    const [color,setColor] = useState('black');
    const [font, setFont] = useState('centery gothic')

    const handleChange = text => {
        setName(text);
    };

    return (
        <div>
            <ResumeForm handle={handleChange} setColor={setColor} setFont={setFont}/>
            <Result userName={name} color={color} font={font}/>
        </div>
    )
}

export default Wrapper