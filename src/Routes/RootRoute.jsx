import React from 'react';

import { Routes, Route } from 'react-router-dom';

import {ROUTES} from "../constants/routes";

import MainLayout from "../Layouts/MainLayout";

class RootRoute extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Routes>
                <Route path={ROUTES.initialPage} element={<MainLayout/>}/>
                <Route path={ROUTES.loginPage} element={<LoginPage/>}/>
                <Route path={'*'} element={'Страница не найдена!'}/>
            </Routes>
        )
    }
}

export default RootRoute