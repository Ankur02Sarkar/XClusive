import React from 'react'
import "./CheckoutProduct.css";
function CheckoutProduct() {
    return (
        <div>
            <div className="checkoutProduct">
                <img src="https://i.ibb.co/MB1QTm9/pixel-6-pro-black-buds-desktop-Web-P-Format-488-context-b-WFzd-GVyf-HJvb3-R8-MTc1-Mj-B8a-W1h-Z2-Uvd2.webp" alt="" className="checkoutProductImg" />
                <div className="checkoutProductInfo">
                    <p className="checkoutProductTitle">
                        <strong>
                            Google Pixel 3 Pro with 256 GB Internal Memory and 6 GB RAM. Get the Latest FlagShip from Android One
                        </strong>
                    </p>
                    <p className="checkoutProductPrice">
                        <small>$</small>
                        <strong>20</strong>
                    </p>
                    <div className="checkoutProductRating">
                        ⭐⭐⭐
                    </div>
                    <button>Remove from Basket</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct