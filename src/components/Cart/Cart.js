import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart, deleteCart} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price + product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(3));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping: $ {shipping}</p>
            <p>Tax: $ {tax}</p>
            <p>Grand Total: $ {grandTotal.toFixed(2)}</p>
            <button onClick={deleteCart} className='clear-cart'>Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
            
            {props.children}
        </div>
    );
};

export default Cart;