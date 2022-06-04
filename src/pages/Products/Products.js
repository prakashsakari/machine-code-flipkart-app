import { Fragment } from "react";
import { data } from "../../db/data";
import { Navbar, ProductCard, Filter } from "../../components/";
import "./Product.css"
import {getProductsByPriceSort, getProductsBySize, getProductsByCategory, getProductsByBrand} from "../../utils";
import { useFilter } from "../../context/filter-context";

export const Products = () => {
    const { sort, size, category, brand } = useFilter();
    const filteredProductsByPrice = getProductsByPriceSort(data, sort);
    const filteredProductsBySize = getProductsBySize(filteredProductsByPrice, size);
    const filteredProductsByCategory = getProductsByCategory(filteredProductsBySize, category);
    const filteredProductsByBrand = getProductsByBrand(filteredProductsByCategory, brand);

    return (
            <Fragment>
                <Navbar />
                <div className="d-flex gap">
                    <Filter />
                    <main className="main d-flex gap wrap">
                        {   
                            filteredProductsByBrand.length > 0 ? (filteredProductsByBrand.map(product => (<ProductCard product={product} key={product._id} />))) : (<span>Nothing to display</span>)
                        }
                    </main>
                </div>
                
            </Fragment>
            
    )
    
}