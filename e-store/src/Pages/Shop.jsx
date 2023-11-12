import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import Jewellery1 from "../Components/Landing/mnz-ToLMORRb97Q-unsplash.jpg";
import { Product } from "./Product";
import "../Components/Products/Shop.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Components/Cart/CartSlice";

export const Shop = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch the addToCart action with the selected product
    dispatch(addToCart(product));
    alert("Item added!");
  };

  // Array of product objects with details
  const products = [
    {
      id: 1,
      image: {
        color1: Jewellery1,
      },
      title: "Jordan 1s Classic",
      description: "Jordan's classic colorway",
      price: 4500,
      color: "Red/White/Black",
    },

    {
      id: 2,
      image: {
        color1: Jewellery1,
      },
      title: "Jordan 1s Classic",
      description: "Jordan's classic colorway",
      price: 4500,
      color: "Red/White/Black",
    },
    {
      id: 3,
      image: {
        color1: Jewellery1,
      },
      title: "Jordan 1s Classic",
      description: "Jordan's classic colorway",
      price: 4500,
      color: "Red/White/Black",
    },

    {
      id: 4,
      image: {
        color1: Jewellery1,
      },
      title: "Jordan 1s Classic",
      description: "Jordan's classic colorway",
      price: 4500,
      color: "Red/White/Black",
    },

    {
      id: 5,
      image: {
        color1: Jewellery1,
      },
      title: "Jordan 1s Classic",
      description: "Jordan's classic colorway",
      price: 4500,
      color: "Red/White/Black",
    },

    {
      id: 6,
      image: {
        color1: Jewellery1,
      },
      title: "Jordan 1s Classic",
      description: "Jordan's classic colorway",
      price: 4500,
      color: "Red/White/Black",
    },
  ];
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="d-flex justify-content-center m-4 extra-flex">
        {products.map((product, index) => (
          <div className="m-4">
            <Product
              key={index}
              image={product.image.color1}
              title={product.title}
              description={product.description}
              price={product.price}
              color={product.color}
            />
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
