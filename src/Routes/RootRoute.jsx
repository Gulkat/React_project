import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import ResumeList from '../Scenes/ResumeList';
import StartPage from '../Scenes/StartPage';
import ResumePreview from "../Scenes/ResumePreview";
import NotFound from "../Scenes/Errors/NotFound";
import SecondaryLayout from "../Layouts/SecondaryLayout/SecondaryLayout";
import Wrapper from "../Layouts/SecondaryLayout/Components/Wrapper";

const RootRoute = () => {
    return (
        <Routes>
            <Route path={ROUTES.initialPage} element={<SecondaryLayout/>}>
                <Route path={ROUTES.startPage} element={<StartPage/>}/>
                <Route path={ROUTES.resumeConstructor} element={<Wrapper/>}/>
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