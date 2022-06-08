import "./FinalPrice.css";
import { useCart } from "../../context/cart-context";

export const FinalPrice = () => {

    const { cart } = useCart();

    const deliveryCharge = 100;

    const totalPriceWithDiscount = cart.reduce((acc, cur) =>  acc + cur.newPrice * cur.quantity, 0)

    const totalPriceWithoutDiscount = cart.reduce((acc, cur) =>  acc + cur.oldPrice * cur.quantity, 0)

    const discount = totalPriceWithoutDiscount - totalPriceWithDiscount;

    const totalPayableAmount = totalPriceWithDiscount + - discount + deliveryCharge

    return (
        <div className="d-flex direction-column gap final-price shadow padding-all-16">
            <div>
                <span>Price Details</span>
            </div>
            <div className="d-flex align-center">
                <span>Price {cart.length} items</span>
                <span className="mg-left">Rs. {totalPriceWithDiscount}</span>
            </div>
            <div className="d-flex align-center">
                <span>Discount</span>
                <span className="mg-left">- Rs. {discount}</span>
            </div>
            <div className="d-flex align-center">
                <span>Delivery Charge</span>
                <span className="mg-left">Rs. {deliveryCharge}</span>
            </div>
            <div className="d-flex align-center">
                <span>Total Amount</span>
                <span className="mg-left">Rs. {totalPayableAmount}</span>
            </div>
            <div className="d-flex align-center">
                <span>You will save Rs. {discount} on this order</span>
            </div>
            <div className="d-flex align-center">
                <button className="button btn-primary place-order cursor">Place Order</button>
            </div>
        </div>
    )
    
}