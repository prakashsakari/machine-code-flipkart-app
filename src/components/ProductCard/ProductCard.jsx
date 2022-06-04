import "./ProductCard.css"

export const ProductCard = ({product}) => {
    const {name, img, alt, brand, price, rating} = product;

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
                  Rs. {price}
               	  <span class="price-strike-through">Rs. 2499</span>
                  <span class="discount">(30% OFF)</span>
               </p>
               <p className="d-flex align-center">{rating} <span class="material-icons-outlined star">
                star
                </span></p>
            </div>
            <div class="cta-btn">
               <button class="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                    <span class="material-icons-outlined">
                        shopping_cart
                    </span>
                 Add To Cart
               </button>
            </div>
        </div>
    </div>
    )

    
}