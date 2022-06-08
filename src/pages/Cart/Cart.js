import { useCart } from "../../context/cart-context";
import { ProductCardHorizontal, Navbar, FinalPrice } from "../../components/";
import { Fragment } from "react";

export const Cart = () => {

    const { cart, saveLater } = useCart();

    return (
        <Fragment>
            <Navbar />
            <main className="main d-flex gap">
                <div className="d-flex direction-column gap">
                    {cart && cart.length > 0 && <h2>Your Cart ({cart.length}) items</h2>}
                {cart && cart.length > 0 ? cart.map(product => <ProductCardHorizontal product={product} key={product._id} />) : <h1>Cart is Empty</h1>}
                </div>
                <div className="fp">
                {cart && cart.length > 0 && <FinalPrice />}
                </div>
            </main>
            <div className="main d-flex direction-column gap">
                {saveLater && saveLater.length > 0 && <h2>Saved for Later ({saveLater.length} items)</h2>}
            {saveLater && saveLater.length > 0 && saveLater.map(product => <ProductCardHorizontal product={product} key={product._id} />)}
            </div>
        </Fragment>
        
        
    )
}