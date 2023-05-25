export const getProductsByPriceSort = (products, type) => {
    const order = type.substr(type.length - 3);
    const prop = type.substr(0, type.length - 3);

    const priceSortedProducts = [...products].sort((product1, product2) => order==="Lth" ? product1[prop] - product2[prop] : order==="Htl" ? product2[prop] - product1[prop]: products );

    return priceSortedProducts
}
