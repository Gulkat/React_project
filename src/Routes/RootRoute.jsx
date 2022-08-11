import React from 'react';

import { Routes, Route } from 'react-router-dom';

import {ROUTES} from '../constants/routes';

import MainLayout from '../Layouts/MainLayout';
import LoginPage from '../Scenes/LoginPage';
import Wrapper from '../Layouts/Components/Wrapper';
import ResumeList from "../Scenes/ResumeList";

class RootRoute extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Routes>
                <Route path={ROUTES.initialPage} element={<MainLayout/>}>
                    <Route path={ROUTES.initialPage} element={<Wrapper/>}></Route>
                </Route>
                <Route path={ROUTES.loginPage} element={<LoginPage/>}/>
                {/*<Route path={ROUTES.resumeData} element={}*/}
                <Route path={ROUTES.resumeList} element={<ResumeList/>}/>
                <Route path={'*'} element={'Страница не найдена!'}/>
            </Routes>
        )
    }
}

export default RootRoute