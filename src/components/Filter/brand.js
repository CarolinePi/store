import React from "react";

import PropTypes from "prop-types";
import {Filter} from "./index";

export function BrandFilter(props) {
    return (
            <Filter
                options={props.brands}
                name={`brand`}
            />
    );
}

BrandFilter.propTypes = {
    brands: PropTypes.arrayOf(PropTypes.string),
}