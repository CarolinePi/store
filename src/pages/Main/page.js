import React, {useContext, useEffect, useState} from "react";
import {MainContext} from "./index";
import {NavBar} from "../../components/NavBar";
import ProductPanel from "../../components/ProductPanel";
import {Paginator} from "../../components/Paginator";
import {BrandFilter} from "../../components/Filter/brand"
import {Spinner} from "../../components/Spinner";
import {Alert} from "../../components/Alert";
import {Sorting} from "../../components/Sorting";

const productsJSON = [
    {
        'artNumber':11111, 'name':'Sneakers Adidas', 'img':'/image', 'brand':'Adidas',
        'weight': 3000, 'quantity': 150, 'price': 4950, 'stock':true
    },
    {
        'artNumber':22222, 'name':'Sneakers Nike', 'img':'/image', 'brand':'Nike',
        'weight': 2400, 'quantity': 110, 'price': 5650, 'stock':true
    },
    {
        'artNumber':33333, 'name':'Sneakers 111', 'img':'/image', 'brand':'Adidas',
        'weight': 3000, 'quantity': 150, 'price': 4950, 'stock':true
    },
    {
        'artNumber':444444, 'name':'Sneakers 222', 'img':'/image', 'brand':'Nike',
        'weight': 2400, 'quantity': 110, 'price': 5650, 'stock':true
    },
    {
        'artNumber':555555, 'name':'Sneakers 333', 'img':'/image', 'brand':'Adidas',
        'weight': 3000, 'quantity': 150, 'price': 4950, 'stock':true
    },
]

export const Page = () => {
    console.log(useContext(MainContext));
    const {product: [products, setProducts]} = useContext(MainContext);
    const {page: [currentPage]} = useContext(MainContext);
    const {filter: [currentFilter]} = useContext(MainContext);

    const updateProducts = () => {
        setTimeout(() => {  setProducts(productsJSON); }, 2000);
    }

    const calculatePages = () => {
        return Math.ceil(filteredProducts().length / 4)
    }

    const getBrands = () => {
        let brands = products.map(product => {
            return product.brand
        })
        return Array.from(new Set(brands));
    }

    const filteredProducts = () => {
        let productsArray = [...products];
        if (currentFilter !== {}) {
            Object.entries(currentFilter).forEach(([key, value]) => {
                productsArray= productsArray.filter(product => product[key] === value);
            });
            return productsArray;
        }
        return productsArray;
    }

    const firstProduct = (currentPage - 1) * 4;
    const lastProduct = firstProduct + 4;

    useEffect(updateProducts, []);

    return (
        <>
            <Spinner visible={products.length === 0} />
            <NavBar />
            <BrandFilter brands={getBrands()} />
            <Sorting />
            <ProductPanel
                products={filteredProducts().slice(firstProduct, lastProduct)}
                quantity={filteredProducts().length}
            />
            <Paginator pages={calculatePages()} />
            <Alert message={`Success`} hidden={false} error={false}/>
        </>
    )
}