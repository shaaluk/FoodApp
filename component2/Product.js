// import React from "react";

function Product(props){
    const {product} = props;

    return(
        <div className="order-child">
            <img className="small" src={product.image}/>
            <h3>{product.name}</h3>
            <div>{product.content}</div>
            <div>${product.price}</div>
       
        <div>
        <button className="btn">Increase</button>
        <button className="btn">Decrease</button>
        </div>
        </div>
    );
}
export default Product;