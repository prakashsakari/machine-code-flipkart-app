import { data } from "../../db/data";
import { Navbar, ProductCard } from "../../components/";
import "./Product.css"
import { Fragment } from "react";
export const Products = () => {
    return (
            <Fragment>
                <Navbar />
                <main className="main d-flex gap wrap">
                {   
                    data.length > 0 ? (data.map(product => (<ProductCard product={product} key={product._id} />))) : (<span>Nothing to display</span>)
                }
            </main>
            </Fragment>
            
    )
    
}