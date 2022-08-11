import React, { Component } from 'react';

class GlobalErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorFired: false,
            error: '',
            errorInfo: '',
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
        this.setState({errorFired: true, error, errorInfo});
    }

    render() {
        if (this.state.errorFired) {
            return (
                <div className={'globalError'}>
                    <h1 className={'globalErrorTitle'}>Обнаружена ошибка! Мы работаем над её исправлением!</h1>
                    {this.state.error}
                </div>
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