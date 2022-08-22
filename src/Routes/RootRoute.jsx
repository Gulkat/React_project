import React from 'react';

import { Routes, Route } from 'react-router-dom';

import {ROUTES} from '../constants/routes';

import MainLayout from '../Layouts/MainLayout';
import LoginPage from '../Scenes/LoginPage';
import Wrapper from '../Layouts/Components/Wrapper';
import ResumeList from '../Scenes/ResumeList';
import ButtonToStart from '../Components/ButtonToStart';

class RootRoute extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Routes>
                <Route path={ROUTES.initialPage} element={<MainLayout/>}>
                    <Route path={ROUTES.initialPage} element={<ButtonToStart/>}/>
                    <Route path={ROUTES.newResume} element={<Wrapper/>}/>
                </Route>
                <Route path={ROUTES.resumeList} element={<ResumeList/>}>
                    <Route path={ROUTES.resumeID} element={<Wrapper/>}/>
                </Route>
                <Route path={ROUTES.loginPage} element={<LoginPage/>}/>
                <Route path={'*'} element={'Страница не найдена!'}/>
            </Routes>
        )
    }
}

export default RootRoute