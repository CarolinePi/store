import React, {useState} from "react";

export const MainContext = React.createContext(null);

export const MainStoreProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentFilter, setFilter] = useState({});
    const [currentSort, setSort] = useState('');

    const store = {
        product: [products, setProducts],
        page: [currentPage, setCurrentPage],
        filter: [currentFilter, setFilter],
        filteredProduct: [filteredProducts, setFilteredProducts],
        sort: [currentSort, setSort],
    }

    return (
        <MainContext.Provider value={store}>
            {children}
        </MainContext.Provider>
    );
};



