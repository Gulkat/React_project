import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { ROUTES } from '../constants/routes';

import MainLayout from '../Layouts/MainLayout';
import Wrapper from '../Layouts/Components/Wrapper';
import ResumeList from '../Scenes/ResumeList';
import StartPage from '../Scenes/StartPage';
import ResumePreview from "../Scenes/ResumePreview";
import NotFound from "../Scenes/Errors/NotFound";
import LoginPage from "../Scenes/Login/LoginPage";

const RootRoute = () => {
    return (
        <Routes>
            <Route path={ROUTES.initialPage} element={<MainLayout/>}>
                <Route path={ROUTES.login} element={<LoginPage/>}/>
                <Route path={ROUTES.startPage} element={<StartPage/>}/>
                <Route path={ROUTES.newResume} element={<Wrapper/>}/>
                <Route path={ROUTES.preview} element={<ResumePreview/>}/>
                <Route path={ROUTES.resumeList} element={<ResumeList/>}>
                    <Route path={ROUTES.resumeID} element={<Wrapper/>}/>
                </Route>
            </Route>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    )
};

export default RootRoute;