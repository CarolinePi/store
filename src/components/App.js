import React, { Component } from "react";

import css from './App.css';
import {MainStoreProvider} from '../pages/Main/index'
import {Page} from "../pages/Main/page";

class App extends Component {

    render() {
        return (
            <MainStoreProvider>
                <Page />
            </MainStoreProvider>
        )
    }
}

export default App;