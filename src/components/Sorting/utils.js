export const sortByPriceUp = (product1, product2) => {
    if (product1.price > product2.price) {
        return 1;
    }
    if (product1.price < product2.price) {
        return -1;
    }
    return 0;
};

export const sortByQuantityUp = (product1, product2) => {
    if (product1.quantity > product2.quantity) {
        return 1;
    }
    if (product1.quantity < product2.quantity) {
        return -1;
    }
    return 0;
};

export const sortByPriceDown = (product1, product2) => {
    if (product1.price < product2.price) {
        return 1;
    }
    if (product1.price > product2.price) {
        return -1;
    }
    return 0;
};

export const sortByQuantityDown = (product1, product2) => {
    if (product1.quantity < product2.quantity) {
        return 1;
    }
    if (product1.quantity > product2.quantity) {
        return -1;
    }
    return 0;
};