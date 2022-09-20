import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {isLoggedIn} from '../store/selectors/userSelectors';
import RegisterPage from '../Scenes/Login/RegisterPage';
import RootRoute from './RootRoute';

import { ROUTES } from '../constants/routes';
import MainLayout from "../Layouts/MainLayout";


const LoginRoute = () => {
    const userLoggedIn = useSelector(isLoggedIn);

    const renderForNotLoggedUser = (Scene) => {
        if (!userLoggedIn) return Scene
        return <Navigate to={ROUTES.startPage}/>
    }

    const renderForLoggedUser = (Scene) => {
        if (userLoggedIn) return Scene
        return <Navigate to={ROUTES.initialPage}/>
    }

    return (
        <Routes>
            <Route path={ROUTES.initialPage} element={<MainLayout/>}>
                <Route index element={renderForNotLoggedUser(<RegisterPage/>)}/>
            </Route>
            <Route path={'*'} element={renderForLoggedUser(<RootRoute/>)}/>
        </Routes>
    )
}

export default LoginRoute;