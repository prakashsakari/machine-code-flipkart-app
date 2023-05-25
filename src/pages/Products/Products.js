import { Fragment } from "react";
import { data } from "../../db/data";
import { Navbar, ProductCard, Filter } from "../../components/";
import "./Product.css"
import {getProductsByPriceSort, getProductsByBrand} from "../../utils";
import { useFilter } from "../../context/filter-context";

export const Products = () => {
    const { sortBy, brand } = useFilter();
    const filteredProductsByPrice = getProductsByPriceSort(data, sortBy);
    const filteredProductsByBrand = getProductsByBrand(filteredProductsByPrice, brand);

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