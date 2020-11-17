import React, {useContext} from "react";

import css from './styles.css';
import {MainContext} from "../../pages/Main";

export function Sorting(props) {
    const {sort: [currentSort, setSort]} = useContext(MainContext);
    const {page: [currentPage, setCurrentPage]} = useContext(MainContext);

    const sorts = {
        "quantityUp": `Sort by quantity ↑`,
        "quantityDown": `Sort by quantity ↓`,
        "priceUp": `Sort by price ↑`,
        "priceDown": `Sort by price ↓`,
    }

    const changeSort = (sort) => {
        setSort(sort);
        setCurrentPage(1);
    }

    return (
        <div className={css.filter}>
            <button className={css.filter_btn}>
                <p className={css.filter_btn_title}>{currentSort !== '' ? sorts[currentSort] : `Sort by`}</p>
                <button className={css.delete_filter_btn} onClick={() =>{changeSort('')}}>&#215;</button>
            </button>
            <div className={css.filter_content}>
                {Object.entries(sorts).map(([sort, name]) =>
                    <p key={sort} className={css.content} onClick={() =>{changeSort(sort)}}>{name}</p>
                )};
            </div>
        </div>
    )
}
