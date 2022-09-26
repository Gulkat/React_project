import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isLoggedIn } from '../store/selectors/userSelectors';
import RegisterPage from '../Scenes/Login/RegisterPage';
import LoginPage from '../Scenes/Login/LoginPage';
import RootRoute from './RootRoute';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import LoginLayout from '../Layouts/LoginLayout/LoginLayout';

import { ROUTES } from '../constants/routes';

const LoginRoute = () => {
    const userLoggedIn = useSelector(isLoggedIn);

    const renderForNotLoggedUser = (Scene) => {
        if (!userLoggedIn) return Scene
        return <Navigate to={ROUTES.startPage}/>
    };

    const renderForLoggedUser = (Scene) => {
        if (userLoggedIn) return Scene
        return <Navigate to={ROUTES.login}/>
    };

    return (
        <Routes>
            <Route path={ROUTES.register} element={<MainLayout/>}>
                <Route index element={renderForNotLoggedUser(<RegisterPage/>)}/>
            </Route>
            <Route path={ROUTES.login} element={<LoginLayout/>}>
                <Route path={ROUTES.login} element={renderForNotLoggedUser(<LoginPage/>)}/>
            </Route>
            <Route path={'*'} element={renderForLoggedUser(<RootRoute/>)}/>
        </Routes>
    );
};

export default LoginRoute;