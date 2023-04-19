import React from "react";
import "./product.css";

function Product({ product, setProduct, products }) {
  const increase = () => {
    const findIndex = products.findIndex((item) => item.name === product.name);
    if (findIndex >= 0) {
      const newValue = [...products];
      newValue[findIndex].value = product.value + 1;
      setProduct(newValue);
    }
  };
  const decrease = () => {
    const findIndex = products.findIndex((item) => item.name === product.name);
    if (findIndex >= 0) {
      const newValue = [...products];
      newValue[findIndex].value = product.value - 1;
      setProduct(newValue);
    }
  };


  return (
    <div className="product-box">
      <div
        className="product-img"
        style={{ backgroundColor: `${product.color}` }}
      ></div>
      <span className="product-name">{product.name}</span>
      <span className="product-size">Size : {product.size}</span>
      <span className="product-color">Color : {product.color}</span>
      <span className="product-amount">$125.00 {product.value}</span>
      <div className="add-sepet">
        {product.value === 0 ? (
          <button className="add-button" onClick={increase}>Add to cart</button>
        ) : (
          <div className="add-custom">
            <button className="decrease" onClick={decrease}>-</button>
            <input className="amount" type="number" value={product.value}  onChange={e => product.value} />
            <button className="increase" onClick={increase}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
