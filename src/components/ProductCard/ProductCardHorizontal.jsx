import { useCart } from "../../context/cart-context";
import { getItemById } from "../../utils";

export const ProductCardHorizontal = ({product}) => {
    const {_id, name, img, alt, brand, newPrice, oldPrice, discount, quantity} = product;
    const { saveLater, cartDispatch } = useCart();

    const isItemSaved = getItemById(saveLater, _id)

    const handleDecrement = (itemId) => {
        cartDispatch({
            type: "DECREMENT",
            payload: itemId
        })
    }

    const handleIncrement = (itemId) => {
        cartDispatch({
            type: "INCREMENT",
            payload: itemId
        })
    }

    const handleRemove = (itemId) => {
        cartDispatch({
            type: "REMOVE",
            payload: itemId
        })
    }

    const handleSaveForLater = (itemId) => {
        cartDispatch({
            type: "SAVE_LATER",
            payload: {itemId, product}
        })
    }

    const handleMoveToCart = () => {
        cartDispatch({
            type: "MOVE_TO_CART",
            payload: product
        })
    }

    return (
        <div class="card-horizontal d-flex shadow">
     <div class="card-hori-image-container relative">
          <img class="card-image" src={img} alt={alt} />
     </div>
     <div class="card-details d-flex direction-column">
          <div class="card-title">{brand}</div>
          <div class="card-description">
               <p class="card-des">{name}</p>
               <p class="card-price">Rs. {newPrice}<span class="price-strike-through padding-all-8">Rs. {oldPrice}</span>
                  <span class="discount padding-all-8">({discount}% OFF)</span>
               </p>
          </div>
          <div class="quantity-container d-flex gap">
               <p class="q-title">Quantity: </p>
               <div class="count-container d-flex align-center gap">
                    <button class="count" disabled={quantity === 1}  onClick={() => handleDecrement(_id)}>-</button>
                    <span class="count-value">{quantity}</span>
                    <button class="count" onClick={() => handleIncrement(_id)}>+</button>
               </div>
          </div>
          <div class="cta-btn d-flex gap">
               <div class="cta-btn">
                   <button class="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin" onClick={() => handleRemove(_id)}>
                       Remove
                    </button>
               </div>
               <div class="cta-btn">
                   <button class="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin"
                            onClick={() => isItemSaved ? handleMoveToCart() : handleSaveForLater(_id)}>
                   {isItemSaved ? "Move To Cart" :  "Save for Later"}</button>
                </div>
          </div>
     </div>
</div>
    )
}