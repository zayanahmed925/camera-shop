import React from 'react';
import './Camera.css';
import { FiShoppingCart } from 'react-icons/fi';
const Camera = (props) => {
    const { setCartHandle, camera } = props
    const { name, img, price } = camera
    return (
        <div className='camera'>
            <img src={img} alt="" />
            <h2>name: {name} </h2>
            <p>Price: ${price}</p>
            <button onClick={() => setCartHandle(camera)} className='camera-button'>
                <p className='cart-text'>Add to Cart</p><p><FiShoppingCart className='icon'></FiShoppingCart></p></button>
        </div>
    );
};

export default Camera;