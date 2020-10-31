import React from "react";
import PropTypes from "prop-types";

import css from './styles.css';


export default function Product(props) {
    return (
        <div className={css.card}>
            <div className={css.product}>
                <div className={css.product_front}>
                    <img
                        src={'public/photo1.jpg'}
                        alt={'product-' + props.artNumber}
                        className={css.image}
                    />
                    <h4 className={css.name_front}>{props.name}</h4>
                    <p className={css.price}>{props.price}</p>
                </div>
                <div className={css.product_back}>
                    <h4 className={css.name_back}>{props.name}</h4>
                    <p className={css.field}>Brand: {props.brand}</p>
                    <p className={css.field}>Weight: {props.weight}</p>
                    <p className={css.field}>Quantity: {props.quantity}</p>
                    <p className={css.field}>Stock: {props.stock ? `yes`: `no`}</p>
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    artNumber: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.bool.isRequired,
}

