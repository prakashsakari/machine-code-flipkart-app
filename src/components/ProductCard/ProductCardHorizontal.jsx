// import { useCart } from "../../context/cart-context";
// import { getItemById } from "../../utils";

export const ProductCardHorizontal = ({product}) => {
    const { name, img, alt, brand,research,general} = product;
    // const { saveLater, cartDispatch } = useCart();

    // const isItemSaved = getItemById(saveLater, _id)

    // const handleDecrement = (itemId) => {
    //     cartDispatch({
    //         type: "DECREMENT",
    //         payload: itemId
    //     })
    // }

    // const handleIncrement = (itemId) => {
    //     cartDispatch({
    //         type: "INCREMENT",
    //         payload: itemId
    //     })
    // }

    // const handleRemove = (itemId) => {
    //     cartDispatch({
    //         type: "REMOVE",
    //         payload: itemId
    //     })
    // }

    // const handleSaveForLater = (itemId) => {
    //     cartDispatch({
    //         type: "SAVE_LATER",
    //         payload: {itemId, product}
    //     })
    // }

    // const handleMoveToCart = () => {
    //     cartDispatch({
    //         type: "MOVE_TO_CART",
    //         payload: product
    //     })
    // }

    return (
     <div class="card-horizontal d-flex shadow">
     <div class="card-hori-image-container relative">
          <img class="card-image" src={img} alt={alt} />
     </div>

     <div class="card-details d-flex direction-column">
          <div class="card-title">{brand}</div>
          <div class="card-description">
               <p class="card-des"><i><b>{name}</b></i></p>
               <p class="card-des"><b>Applications:</b> 
    <span class="research">Research: <i><b>{research}</b></i></span> 
    <span class="general">General: <i><b>{general}</b></i></span></p>
  
  <div class="carddropdown">
  <button class="carddropbtn">View details</button>
  
  
</div>
    </div>   
     </div>
</div>
    )
}