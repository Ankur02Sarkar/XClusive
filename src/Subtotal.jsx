import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div>
            <div className="subtotal">
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p> Subtotal ({basket.length} items): <strong>${value}</strong> </p>
                            <small className="subtotalGift">
                                <input type="checkbox" name="" id="" /> This order contains a Gift
                            </small>
                            <button>Proceed to Checkout</button>
                        </>
                    )}

                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                // prefix = {$}
                />
            </div>
        </div>
    )
}

export default Subtotal