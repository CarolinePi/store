import React, {useContext} from "react";
import classNames from 'classnames';

import css from './styles.css';
import PropTypes from "prop-types";
import {MainContext} from "../../pages/Main";

export const Paginator = (props) => {
    const {page: [currentPage, setCurrentPage]} = useContext(MainContext);

    const updatePage = (page) => {
        setCurrentPage(page)
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage < props.pages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className={css.pagination}>
            <button className={css.btn} onClick={() =>{prevPage()}}>&laquo;</button>
            {Array.from({length: props.pages}, (_, index) => index + 1).map((number) => (
                <button
                    key={number}
                    className={classNames({
                        [css.active]: number === currentPage,
                        [css.btn]: true,
                    })}
                    onClick={() =>{updatePage(number)}}
                >
                    {number}
                </button>
            ))}
            <button className={css.btn} onClick={() =>{nextPage()}}>&raquo;</button>
        </div>
    )
};

Paginator.propTypes = {
    pages: PropTypes.number.isRequired,
}
