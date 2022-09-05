import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { ROUTES } from '../constants/routes';

import MainLayout from '../Layouts/MainLayout';
import LoginPage from '../Scenes/LoginPage';
import Wrapper from '../Layouts/Components/Wrapper';
import ResumeList from '../Scenes/ResumeList';
import StartPage from '../Scenes/StartPage';
import Result from "../Scenes/Result";

const RootRoute = () => {
    return (
        <Routes>
            <Route path={ROUTES.initialPage} element={<MainLayout/>}>
                <Route path={ROUTES.startPage} element={<StartPage/>}/>
                <Route path={ROUTES.newResume} element={<Wrapper/>}>
                    <Route path={ROUTES.preview} element={<Result/>}/>
                </Route>
                <Route path={ROUTES.resumeList} element={<ResumeList/>}>
                    <Route path={ROUTES.resumeID} element={<Wrapper/>}/>
                </Route>
            </Route>
            <Route path={'*'} element={'Страница не найдена!'}/>

        </Routes>
    )
}

export default RootRoute;