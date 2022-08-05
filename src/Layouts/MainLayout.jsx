import React from 'react';
import styled from 'styled-components';

import { Outlet } from 'react-router-dom'
import Header from "./Components/Header";


const StyledMainLayout = styled.div`
  width: 100%;
  
  .content {
    width: 100%;
    height: calc(100vh - 100px);
    overflow: auto;
  }
  
  .footer {
    width: 100%;
    height: 20px;
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
                <main className={'content'}>
                    <Outlet/>
                </main>
                <footer className={'footer'}/>
            </StyledMainLayout>
        )
    }
}

export default MainLayout