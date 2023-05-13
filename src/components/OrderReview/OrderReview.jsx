import React from 'react';
import './OrderReview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const OrderReview = ({ product, handleRemoveFromCart }) => {
    const { id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock } = product;
    return (
        <div className='order-item'>
            <img src={img} alt="" />
            <div className='order-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>{price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default OrderReview;