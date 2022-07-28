import React from "react";
import {Routes, Route} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Wrapper from "../Scenes/Wrapper";

class RootRoute extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Routes>
                <Route path={'/main'} element={<Wrapper/>}/>
                <Route path={'*'} element={"Страница не найдена!"}/>
            </Routes>
        )
    }
}

export default RootRoute