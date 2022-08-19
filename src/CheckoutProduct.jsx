import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div>
            <div className="checkoutProduct">
                <img src={image} alt="" className="checkoutProductImg" />
                <div className="checkoutProductInfo">
                    <p className="checkoutProductTitle">
                        <strong>
                        {title}
                        </strong>
                    </p>
                    <p className="checkoutProductPrice">
                        <small>$</small>
                        <strong> {price} </strong>
                    </p>
                    <div className="checkoutProductRating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))}
                    </div>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct