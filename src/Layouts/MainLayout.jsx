import React from 'react';
import styled from 'styled-components';

import { Outlet } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';

const StyledMainLayout = styled.div`

  .content {
    width: 100%;
    height: calc(100vh - 150px);
    overflow: auto;
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