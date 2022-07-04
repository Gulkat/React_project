import React from 'react';
import styled from 'styled-components';

const StyledResult = styled.div`
  background-color: #e5e4ea;
  width: 50%;
  
  .result {
    background-color: #fff;
    margin: 30px auto ;
    width: 70%;
    height: 70%;
  }
  
`

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledResult className={'resultForm'}>
                <div className={'result'}></div>
            </StyledResult>
        )
    }
}
export default Result