import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import Basket from "./basket.js";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fe-test-case-eeca77cfvq-ue.a.run.app"
      );
      const data = await response.json();

      const processedData = data.map((item) => ({ ...item, value: 0 }));

      setProduct(processedData);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home product={product} setProduct={setProduct} />}
        />
        <Route
          path="/basket"
          element={<Basket product={product} setProduct={setProduct} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
