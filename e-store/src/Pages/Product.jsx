// In your Product.js file
import React from "react";

export const Product = ({ image, title, description, price, color }) => {
  return (
    <div className="card" style={{ width: "20rem", height: "auto" }}>
      <img
        src={image}
        className="card-img-top"
        alt="Product"
        style={{ width: "20rem", height: "auto" }}
      />
      <div className="card-body bg-black text-light">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Color: {color}</p>
        <p className="card-text">Price: ${price}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
