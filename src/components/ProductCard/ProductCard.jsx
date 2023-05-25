import "./ProductCard.css"
import { useCart } from "../../context/cart-context";
import { getItemById } from "../../utils";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({product}) => {
    const {_id, name, img, alt,country, sg, mc, mor, moe,
    age,
    // crystallinity,
    // bendable,
    height} = product;

    const { cart, saveLater, cartDispatch } = useCart();

    const navigate = useNavigate();


    const handleAddToCart = () => {
        cartDispatch({
            type: "ADD_TO_CART",
            payload: product
        })
        navigate("/cart")
    }

    const handleGoToCart = () => {
        navigate("/cart");
    }

    const isItemInCart = getItemById(cart, _id)

    const isItemSaved = getItemById(saveLater, _id)


    return (
        <div class="card card-vertical d-flex direction-column relative shadow">
        <div class="card-image-container">
            <img class="card-image" src={img} alt={alt} />
        </div>
        <div class="card-details">
            <div class="card-title"><i>{name}</i></div>
            <div class="card-description">
               <p class="card-des">{country}</p>
               <p class="card-des">SG: {sg}</p>
               <p class="card-des">MC: {mc}</p>
               <p class="card-des">MOR: {mor}</p>
               <p class="card-des">MOE: {moe}</p>
               <p class="card-des">age: {age}</p>
               <p class="card-des">height: {height}</p>
               {/* <p class="card-des">cryst: {crystallinity}</p>
               <p class="card-des">bendable: {bendable}</p> */}
            </div>
            <div class="cta-btn">
               <button class="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
                        onClick={(isItemInCart || isItemSaved) ? handleGoToCart : handleAddToCart}>
                    <span class="material-icons-outlined">
                        shopping_cart
                    </span>
                 {(isItemInCart || isItemSaved) ? "Go To bamboo list" : "Add To bamboo list"}
               </button>
            </div>
        </div>
    </div>
    )

    
}