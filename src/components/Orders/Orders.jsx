import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderReview from '../OrderReview/OrderReview';
import { removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className="order-container">
                {
                    cart.map(product => <OrderReview
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></OrderReview>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;