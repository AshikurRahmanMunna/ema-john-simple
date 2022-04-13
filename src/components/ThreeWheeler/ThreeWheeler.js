import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Product from "../Product/Product";

const ThreeWheeler = () => {
  const [products, setProducts] = useProducts();
  const [threeWheelers, setThreeWheelers] = useState([]);
  const [cart, setCart] = useCart(products);
  useEffect(() => {
    const threeWheelerVehicles = products.filter((product) =>
      product.category.includes("Three Wheeler")
    );
    setThreeWheelers(threeWheelerVehicles);
    console.log(threeWheelers);
  }, [threeWheelers]);
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  
  const deleteCart = () => {
    localStorage.removeItem("shopping-cart");
    setCart([]);
  };
  return (
    <Container>
        <h1 className="mt-5 pt-5 text-center">Easy<span className="text-warning">Bike</span></h1>
        <div className="shop-container">
        {
            threeWheelers.map(threeWheeler => <Product
                key={threeWheeler.id}
                product={threeWheeler}
                handleAddToCart={handleAddToCart}
              ></Product>)
        }
    </div>
    </Container>
  );
};

export default ThreeWheeler;
