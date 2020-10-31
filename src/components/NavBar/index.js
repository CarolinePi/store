import React from 'react';

import css from './styles.css';

export const NavBar = () => (
    <div className={css.root}>
        <div className={css.header}>
            <nav className={css.nav}>
                <ul className={css.nav_wrapper}>
                    <li className={css.nav_item}><a href="/">Products</a></li>
                </ul>
            </nav>
        </div>
    </div>
);