import React from 'react'
import products from "../product";
import { Link } from 'react-router-dom';
const ProductList = () => {
    console.log(products);
  return (
    <div>
        <h1 style={{textAlign:"center",color:"maroon"}}>Products List</h1>
    <div style={{margin:"5%",padding:"5%"}}>
        {products.map((p)=>(

           <Link to={`/product/${p.id}`} key={p.id} style={{border:"1px solid black",display:"inline-block",margin:"2px",padding:"10px" }}>
            <h4>{p.name}</h4>
            <h3 style={{color:"maroon"}}>${p.price}</h3>
           <img src={p.image} alt="" />
           </Link>
        ))}
    </div>
    </div>
  );
}

export default ProductList