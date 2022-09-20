import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFaceFrown} from '@fortawesome/free-regular-svg-icons'

const StyledServerError = styled.div`
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

const ServerError = () => {
    return (
        <StyledServerError>
            <h2 className={'message'}>В работе сервера произошла ошибка!</h2>
            <h3 className={'message'}>Мы устраняем неисправность, попробуйте обновить страницу через некоторое время.</h3>
            <h3 className={'message'}>Приносим извинения за временные неудобства.</h3>
            <div className={'icon'}>
                <FontAwesomeIcon className={'notFoundIcon'} icon={faFaceFrown}/>
            </div>
        </StyledServerError>
    )
}

export default ServerError;