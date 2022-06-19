export const getProductsByPriceSort = (products, type) => {
    const priceSortedProducts = [...products].sort((product1, product2) => type==="lth" ? product1.newPrice - product2.newPrice : type==="htl" ? product2.newPrice - product1.newPrice: products );

    return priceSortedProducts
}
