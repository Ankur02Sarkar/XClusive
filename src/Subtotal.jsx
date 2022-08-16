import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
function Subtotal() {
  return (
    <div>
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p> Subtotal (0 items): <strong>$0</strong> </p>
                    <small className="subtotalGift">
                        <input type="checkbox" name="" id="" /> This order contains a Gift
                    </small>
                    <button>Proceed to Checkout</button>
                    </>
                )}

                decimalScale = {2}
                value = {0}
                displayType = {"text"}
                thousandSeparator = {true}
                // prefix = {$}
            />
        </div>
    </div>
  )
}

export default Subtotal