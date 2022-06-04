export const getProductsByPriceSort = (products, type) => {
    const priceSortedProducts = [...products].sort((product1, product2) => type==="lth" ? product1.price - product2.price : type==="htl" ? product2.price - product1.price: products );

    return priceSortedProducts
}
