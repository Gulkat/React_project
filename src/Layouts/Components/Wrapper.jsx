import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import ResumeForm from 'Scenes/ResmeForm/ResumeForm';
import Result from 'Scenes/Result';
import {useParams} from "react-router-dom";

const StyledWrapper = styled.div`
  height: calc(100vh - 150px);
  width: 100%;
  overflow: auto;
`

const Wrapper = () => {
    const [color,setColor] = useState('black');
    const [font, setFont] = useState('centery gothic');

    // const {resumeID} = useParams();
    // const [loadingState, setLoadingState] = useState(!!resumeID)
    //
    // let initialFormData = {};
    //
    // useEffect(() => {
    //     if (resumeID) {
    //         fetchResumeData(resumeID).then(({data}) => {
    //             initialFormData = data.find(resumeApi => resumeApi.id === resumeID);
    //             setLoadingState(false);
    //         })
    //     }
    // }, [])

    return (
        <StyledWrapper>
            <ResumeForm setColor={setColor} setFont={setFont}/>
            <Result color={color} font={font}/>
        </StyledWrapper>

    )
}

export default Wrapper