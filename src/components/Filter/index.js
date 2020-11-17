import React, {useContext} from "react";

import css from './styles.css';
import {MainContext} from "../../pages/Main";
import PropTypes from "prop-types";

export function Filter(props) {
    const {filter: [currentFilter, setFilter]} = useContext(MainContext);
    const {page: [currentPage, setCurrentPage]} = useContext(MainContext);

    const changeFilter = (filter) => {
        if (filter !== '') {
            setFilter({...currentFilter, [props.name]: filter });
        } else {
            setFilter({});
        }
        setCurrentPage(1);
    }

    const currentFilters = Object.keys(currentFilter);

    return (
        <div className={css.filter}>
            <button className={css.filter_btn}>
                <p className={css.filter_btn_title}>{
                     currentFilters.includes(props.name) ? currentFilter[props.name] : props.name
                }</p>
                <button className={css.delete_filter_btn} onClick={() =>{changeFilter('')}}>&#215;</button>
            </button>
            <div className={css.filter_content}>
                {props.options.map((option) => (
                    <p key={option} className={css.content} onClick={() =>{changeFilter(option)}}>{option}</p>
                ))}
            </div>
        </div>
    )
}

Filter.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
}
