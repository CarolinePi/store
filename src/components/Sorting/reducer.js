import {
    sortByQuantityUp,
    sortByPriceUp,
    sortByQuantityDown,
    sortByPriceDown,
} from './utils'
import {useContext} from "react";
import {MainContext} from "../../pages/Main";

const {product: [products, setProducts]} = useContext(MainContext);

export const SortingReducer = (state, action) => {
    switch(action.type) {
        case 'quantityUp': {
            const products = sortByQuantityUp()
            return {
                products: products
            };
        }
        case 'priceUp': {
            const products = sortByPriceUp()
            return {
                products: products
            };
        }
        case 'quantityDown': {
            const products = sortByQuantityDown()
            return {
                products: products
            };
        }
        case 'priceDown': {
            const products = sortByPriceDown()
            return {
                products: products
            };
        }


        default:
            return state
    }
};