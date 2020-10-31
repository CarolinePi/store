import React, {useContext, useEffect} from "react";
import { MainContext } from "./index";
import { NavBar } from "../../components/NavBar";
import ProductPanel from "../../components/ProductPanel";

const products = [
    {
        'artNumber':11111, 'name':'Sneakers Adidas', 'img':'/image', 'brand':'Adidas',
        'weight': 3000, 'quantity': 150, 'price': 4950, 'stock':true
    },
    {
        'artNumber':22222, 'name':'Sneakers Nike', 'img':'/image', 'brand':'Nike',
        'weight': 2400, 'quantity': 110, 'price': 5650, 'stock':true
    },
]

export const Page = () => {
    const context = useContext(MainContext);

    const updateProducts = () => {
        context.setProducts(products)
    }

    useEffect(updateProducts, []);


    return (
        <>
            <NavBar />
            <ProductPanel products={products} />

        </>
    )
}