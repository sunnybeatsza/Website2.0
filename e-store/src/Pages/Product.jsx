// Importing React for building the component
import React from "react";

// Product component definition with destructured props
export const Product = ({ image, title, description, price, color }) => {
  // Rendering the product information using Bootstrap card styling
  return (
    <div className="card" style={{ width: "20rem", height: "auto" }}>
      {/* Product image */}
      <img
        src={image}
        className="card-img-top"
        alt="Product"
        style={{ width: "20rem", height: "auto" }}
      />
      {/* Product details within the card body */}
      <div className="card-body bg-black text-light">
        {/* Product title */}
        <h5 className="card-title">{title}</h5>
        {/* Product description */}
        <p className="card-text">{description}</p>
        {/* Product color */}
        <p className="card-text">Color: {color}</p>
        {/* Product price */}
        <p className="card-text">Price: ${price}</p>
      </div>
    </div>
  );
};
