import React from 'react';
import styled from 'styled-components';

import { Outlet } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';

const StyledMainLayout = styled.div`
  width: 100%;
  height: 100%;
  
  .content {
    width: 100%;
    height: calc(100vh - 100px);
    overflow: auto;
    display: flex;
    flex-direction:column;
    align-items: center;
  }

`

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <StyledMainLayout>
                <header><Header/></header>
                <main className={'content'}><Outlet/></main>
                <footer><Footer/></footer>
            </StyledMainLayout>
        )
    }
}

export default MainLayout