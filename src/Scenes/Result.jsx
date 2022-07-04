import React from 'react';
import styled from 'styled-components';

const StyledResult = styled.div`
  background-color: #e5e4ea;
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
  right: 0;
  
  .result {
    background-color: #fff;
    margin: 30px auto ;
    width: 70%;
    height: 100%;
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