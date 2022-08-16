import React from 'react'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function checkout() {
  return (
    <div>
      <div className="checkout">
        <div className="checkoutLeft">
          <img src="https://i.ibb.co/3TCqhW7/mega-sale-concept-horizontal-banner-template-design-discount-abstract-vector-id1198830919.jpg" className='checkoutAd' alt="" />
          <div className="item">
            <h2 className="checkoutTitle"> Your Shopping Basket </h2>
            <CheckoutProduct />
            <CheckoutProduct />
            <CheckoutProduct />
          </div>
        </div>
        <div className="checkoutRight">
          <Subtotal />
        </div>
      </div>
    </div>
  )
}

export default checkout