import React, {useState} from "react";
import {Page} from "./page";

export const MainContext = React.createContext(null);


export const MainPage = () => {
    const [products, setProducts] = useState([]);
    const isEmpty = products.length === 0;

    return (
        <MainContext.Provider value={{ products, setProducts, isEmpty }}>
            <Page />
        </MainContext.Provider>
    );
};



