import React from 'react'
import {useParams} from "react-router-dom";
import product from "../product";
const ProductDetail = () => {
    const {id}=useParams();
    const prod=product.find((p)=>p.id);
    const onSubmit=()=>{
        alert("Product added to cart")
    }
  return (
    
    <div>
        <h1 >ProductDetail</h1>
                    <h4>{prod.name}</h4>
            <h3 style={{color:"maroon"}}>${prod.price}</h3>
     <button onClick={onSubmit}>Add To cart ✔</button>
    </div>
  )
}

export default ProductDetail