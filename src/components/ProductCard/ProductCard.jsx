import "./ProductCard.css"
import { useCart } from "../../context/cart-context";
import { getItemById } from "../../utils";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({product}) => {
    const {_id, name, img, alt, brand, newPrice, oldPrice, discount, rating} = product;
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
            <div class="card-title">{brand}</div>
            <div class="card-description">
               <p class="card-des">{name}</p>
               <p class="card-price d-flex align-end">
                  Rs. {newPrice}
               	  <span class="price-strike-through">Rs. {oldPrice}</span>
                  <span class="discount">({discount}% OFF)</span>
               </p>
               <p className="d-flex align-center">{rating} <span class="material-icons-outlined star">
                star
                </span></p>
            </div>
            <div class="cta-btn">
               <button class="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
                        onClick={(isItemInCart || isItemSaved) ? handleGoToCart : handleAddToCart}>
                    <span class="material-icons-outlined">
                        shopping_cart
                    </span>
                 {(isItemInCart || isItemSaved) ? "Go To Cart" : "Add To Cart"}
               </button>
            </div>
        </div>
    </div>
    )

    
}