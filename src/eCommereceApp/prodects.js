import React,{useState} from "react";


function Product({cardDetails={},cartValue,setCartValue}) {

    
const [buttonText,setButtonText]=useState('Add to Cart');

const handleClick=()=>{

if(buttonText ==='Add to Cart'){
    setCartValue(cartValue + 1)
    setButtonText('Remove to Cart')
}else{
    setCartValue(cartValue - 1)
    setButtonText('Add to Cart')
}



}




  return (
    <div>
 
 <div className="col mb-5 cards">
<div className="card h-100">

    <div className="badge bg-dark text-white position-absolute">{cardDetails.sale.itsAvailable ? 'mostpapular':"sale"}</div>

  
    <img className="card-img-top" srcSet={cardDetails.cardImag}  alt="..."/>

    <div className="card-body p-4">
        <div className="text-center">

            <h5 className="fw-bolder">{cardDetails.itemName}</h5>

            <span className="text-muted text-decoration-line-through">{cardDetails.price}</span>
            {cardDetails.discount}
        </div>
    </div>

    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" id="add-car"onClick={handleClick}>{buttonText}</button>
           
            
        </div>
    </div>
</div>
</div> 
   
    </div>
  



     
  );
}

export default Product;



