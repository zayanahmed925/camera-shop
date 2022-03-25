import React from 'react';
import './Camera.css';
const Camera = (props) => {
    const { name, img, price } = props.camera
    return (
        <div className='camera'>
            <img src={img} alt="" />
            <h2>name: {name} </h2>
            <p>Price: ${price}</p>
            <button className='camera-button'>Add to Cart</button>
        </div>
    );
};

export default Camera;