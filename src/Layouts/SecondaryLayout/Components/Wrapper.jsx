import React from 'react';
import styled from "styled-components";

import ResumeForm from 'Scenes/ResumeForm/ResumeForm';
import Result from 'Scenes/Result';

const StyledWrapper = styled.div`
  height: calc(100vh - 150px);
  width: 100%;
  overflow: auto;
`

const Wrapper = () => {

    return (
        <StyledWrapper>
            <ResumeForm/>
            <Result/>
        </StyledWrapper>
    );
};

export default Wrapper;