import React from 'react';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner'

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
`

const Loading = () => {
    return (
        <StyledLoading>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#7B68EE"
                wrapperClassName="loading"
            />
        </StyledLoading>
    )
}

export default Loading