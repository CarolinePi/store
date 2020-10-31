import React from 'react';
import classNames from 'classnames';

import css from './styles.css';

export const Paginator = () => (
    <div className={css.pagination}>
        <a href="#">&laquo;</a>
        <a className={classNames({ [css.active]: true })} href="#">1</a>
        <a href="#">2</a>
        <a href="#">&raquo;</a>
    </div>
);