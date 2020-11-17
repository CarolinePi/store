import React, { Component } from "react";

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