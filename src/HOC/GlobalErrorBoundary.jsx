import React, { Component } from 'react';
import styled from 'styled-components';

const StyledGlobalErrorBoundary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  .globalErrorTitle {
    font-family: ${props => props.theme.baseFont};
    margin-top: 100px ;
    font-size: 28px;
    color: ${props => props.theme.accentColor};
  }
`

class GlobalErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorFired: false,
        };
    }

    componentDidCatch() {
        this.setState({errorFired: true});
    }

    render() {
        if (this.state.errorFired) {
            return (
                <StyledGlobalErrorBoundary>
                    <h1 className={'globalErrorTitle'}>Обнаружена ошибка... Мы работаем над её исправлением!</h1>
                </StyledGlobalErrorBoundary>
            )
        }
        else {
            return (
                <React.Fragment>
                    {this.props.children}
                </React.Fragment>
            );
        }
    };
}


export default GlobalErrorBoundary;