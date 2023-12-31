// Importing React, Navbar component, Product component, styles, and Redux hook
import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Product } from "./Product";
import "../Components/Products/Shop.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Components/Cart/CartSlice";

// Function to generate a random image URL from a predefined list
const generateRandomImage = () => {
  // Replace these placeholder URLs with actual image URLs
  const imageUrls = [
    "https://blog.makersvalley.net/hs-fs/hubfs/Blog%20Pic1%20.png?width=600&name=Blog%20Pic1%20.png",
    "https://wwd.com/wp-content/uploads/2020/11/Burberry-Campaign-Courtesy-of-Burberry-_-Rafael-Pavarotti.jpg",
    "https://assets.burberry.com/is/image/Burberryltd/7EB3595A-07BF-4978-9131-134111030872?$BBY_V2_SL_3x4$&wid=640&hei=852",
    "https://cdn-images.farfetch-contents.com/21/24/31/20/21243120_51784798_300.jpg",
    "https://cdn-images.farfetch-contents.com/12/98/05/13/12980513_15990369_300.jpg",
    "https://www.net-a-porter.com/variants/images/1647597317448702/in/w358_q60.jpg",
    // Add more image URLs as needed
  ];

  // Generating a random index to select a random image URL
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
};

// Shop component definition
export const Shop = () => {
  // Initializing Redux dispatch
  const dispatch = useDispatch();

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    // Dispatching the addToCart action with the selected product
    dispatch(addToCart(product));
    // Alerting the user that the item has been added to the cart
    alert("Item added! Click the cart on the top right to see your items");
  };

  // Array of randomly generated product objects
  const products = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    image: {
      color1: generateRandomImage(),
    },
    title: `Olympian ${index + 1}`,
    description: "Exquisite luxury item with exceptional craftsmanship.",
    price: Math.floor(Math.random() * 5000) + 1000,
    color: "Assorted Colors",
  }));

  // Rendering the Shop component
  return (
    <div>
      {/* Navbar component */}
      <div>
        <Navbar />
      </div>
      {/* Container for displaying products and Add to Cart buttons */}
      <div className="d-flex justify-content-center m-4 extra-flex">
        {/* Mapping through the products array to display each product */}
        {products.map((product) => (
          <div className="m-4" key={product.id}>
            {/* Product component with details */}
            <Product
              image={product.image.color1}
              title={product.title}
              description={product.description}
              price={product.price}
              color={product.color}
            />
            {/* Button to add the product to the cart */}
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
