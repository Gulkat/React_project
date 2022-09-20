import React from 'react';
import styled from 'styled-components';

const StyledEmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .message {
    font-family: ${props => props.theme.baseFont};
    margin-top: 100px ;
    font-size: 28px;
    color: ${props => props.theme.accentColor};
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