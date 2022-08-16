import React from "react";
import "./Product.css";
function Product({ id, title, cost, rating, img }) {
  return (
    <div className="mainProduct">
      <div className="product">
        <div className="product_info">
          <p> {title} </p>
          <p className="product_price">
            <strong> ${cost} </strong>
          </p>
          <div className="product_rating">
            {/* ⭐⭐⭐⭐⭐ */}
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={img} alt="Product Item" />
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
