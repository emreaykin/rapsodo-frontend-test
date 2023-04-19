import Basket from "./sepet.svg";
import Product from "./product.js";
import { NavLink } from "react-router-dom";
import "./home.css";

function Home({ setProduct, product }) {
  return (
    <div className="container">
      <div className="basket">
        <NavLink to="/basket">
          <img
            className="basket"
            src={Basket}
            alt="Sepet"
            style={{ height: "24px", width: "24px" }}
          />
        </NavLink>

        <span className="mount">
          {product.filter((item) => item.value > 0).length}
        </span>
      </div>
      <div className="container products">
        {product.map((products, index) => (
          <Product
            key={index}
            product={products}
            products={product}
            setProduct={setProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
