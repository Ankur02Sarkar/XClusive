import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();
  // const [dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
        title: title,
      },
    });
  };
  return (
    <div className="mainProduct">
      <div className="product">
        <div className="product_info">
          <p> {title} </p>
          <p className="product_price">
            <strong> ₹{price} </strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt="Product Item" />
        <button onClick={addToBasket}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
