import React, { Component } from "react";

import css from './App.css';
import Product from "./Product";
import {MainPage} from "../pages/Main";

class App extends Component {

    render() {
        return (
            <MainPage />
        )
    }

    // render() {
    //     return (
    //         <div>
    //             <h1 className={css.text}>My React Aавпfffпапаpp!</h1>
    //             <Product
    //                 artNumber={12345}
    //                 name={'fff'}
    //                 img={'fff'}
    //                 brand={'adidas'}
    //                 weight={500}
    //                 quantity={10}
    //                 price={1300}
    //                 stock={true}
    //             />
    //         </div>
    //     );
    // }
}

export default App;