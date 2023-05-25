
export const ProductCardHorizontal = ({product}) => {
    const { name, img, alt, brand,research,general} = product;
   

    return (
     <div class="card-horizontal d-flex shadow">
     <div class="card-hori-image-container relative">
          <img class="card-image" src={img} alt={alt} />
     </div>

     <div class="card-details d-flex direction-column">
          <div class="card-title">{brand}</div>
          <div class="card-description">
               <p class="card-des"><i><b>{name}</b></i></p>
               <p class="card-des"><b><i>Applications:</i></b> 
    <span class="research">Research: <i><b>{research}</b></i></span> 
    <span class="general">General: <i><b>{general}</b></i></span></p>
  
    </div>   
     </div>
</div>
    )
}