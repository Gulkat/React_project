import React from 'react';
import styled from 'styled-components';

import { Outlet } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';

const StyledSecondaryLayout = styled.div`
  width: 100%;
  height: 100%;
  
  .content {
    width: 100%;
    height: calc(100vh - 80px);
    overflow: auto;
    display: flex;
    flex-direction:column;
    align-items: center;
  }

`

class SecondaryLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <StyledSecondaryLayout>
                <header><Header/></header>
                <main className={'content'}><Outlet/></main>
                <footer><Footer/></footer>
            </StyledSecondaryLayout>
        )
    }
}

export default SecondaryLayout;