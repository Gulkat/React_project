import React from 'react';
import styled from 'styled-components';

const StyledEmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .message {
    font-family: "Century Gothic";
    font-size: 36px;
    color: darkred;
  }
`

const EmptyList = () => {
    return (
        <StyledEmptyList>
            <h2 className={'message'}>Резюме еще не создано!</h2>
        </StyledEmptyList>
    )
}

export default EmptyList