import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFaceFrown} from '@fortawesome/free-regular-svg-icons'

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .message {
    font-family: ${props => props.theme.baseFont};
    margin-top: 100px ;
    font-size: 28px;
    color: ${props => props.theme.accentColor};
  }
  .notFoundIcon {
    font-size: 50px;
    color: ${props => props.theme.accentColor};
  }
`

const NotFound = () => {
    return (
        <StyledNotFound>
            <h2 className={'message'}>Страница не найдена!</h2>
            <div className={'icon'}>
                <FontAwesomeIcon className={'notFoundIcon'} icon={faFaceFrown}/>
            </div>
        </StyledNotFound>
    )
}

export default NotFound;