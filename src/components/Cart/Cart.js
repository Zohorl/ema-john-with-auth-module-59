import React, { Children } from 'react';
import Products from '../Products/Products';
import './Cart.css';
const Cart = (props) => {
    console.log(props)
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    // 10 % tax
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order-Summary</h3>
            <p>Selected-Items : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Change : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
            {props.children}
        </div>
    );
};

export default Cart;