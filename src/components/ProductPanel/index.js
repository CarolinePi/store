import React from "react";
import PropTypes from "prop-types";

import css from './styles.css';
import Product from "../Product";

export default function ProductPanel(props) {
    return (
        <div className={css.product_panel}>
            <p>{`All products: ${props.quantity}`}</p>
            <div className={css.table_tile}>
                {props.products.map((product) => (
                    <Product
                        key={product.artNumber}
                        artNumber={product.artNumber}
                        name={product.name}
                        img={product.img}
                        brand={product.brand}
                        weight={product.weight}
                        quantity={product.quantity}
                        price={product.price}
                        stock={product.stock}
                    />
                ))}
            </div>
        </div>
    );
}

ProductPanel.propTypes = {
    products: PropTypes.array.isRequired,
    quantity: PropTypes.number.isRequired,
}

