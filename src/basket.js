import { NavLink } from "react-router-dom";
import "./basket.css";

function Basket({ setProduct, product }) {
  let total = 0;
  const increase = (basket) => {
    const findIndex = product.findIndex((item) => item.name === basket.name);
    if (findIndex >= 0) {
      const newValue = [...product];
      newValue[findIndex].value = basket.value + 1;
      setProduct(newValue);
    }
  };

  const decrease = (basket) => {
    const findIndex = product.findIndex((item) => item.name === basket.name);
    if (findIndex >= 0) {
      const newValue = [...product];
      newValue[findIndex].value = basket.value - 1;
      setProduct(newValue);
    }
  };
  product.map((basket) =>
    basket.value > 0
      ? (total = total + basket.value * basket.amount)
      : (total = total + 0)
  );

  return (
    <div className="container sepet">
      <div className="product">
        <div className="product-title">
          <span>Products</span>
          <NavLink to="/">
            <span>Back</span>
          </NavLink>
        </div>
        {product.map((basket, index) => {
          if (basket.value > 0) {
            return (
              <div key={index} className="product-body">
                <div
                  className="product-colorr"
                  style={{ backgroundColor: `${basket.color}` }}
                ></div>
                <div className="product-content">
                  <span className="basket-product">{basket.name}</span>
                  <span className="basket-size">Size : {basket.size} </span>
                  <span className="basket-color">Color : {basket.color}</span>
                  <span className="basket-amount">$ {basket.amount}</span>
                </div>
                <div className="product-value">
                  <button onClick={() => decrease(basket)}>-</button>
                  <input
                    type="number"
                    value={basket.value}
                    onChange={(e) => basket.value}
                  />
                  <button onClick={() => increase(basket)}>+</button>
                </div>
              </div>
            );
          } else {
            return null; // eğer koşulu sağlamıyorsa hiçbir şey döndürmeyin
          }
        })}
      </div>
      <div className="subtotal">
        <div className="product-subtotal">Subtotal</div>
        <div className="basket-total">
          <span>Toplam: {total}</span>
        </div>
      </div>
    </div>
  );
}

export default Basket;
