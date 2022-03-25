import React, { useEffect, useState } from 'react';
import Camera from '../Camera/Camera';
import Cart from '../Cart/Cart';
import './Shop.css'
const Shop = () => {
    const [cameras, setCameras] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('camera.json')
            .then(res => res.json())
            .then(data => setCameras(data))
    }, [])
    const setCartHandle = (camera) => {
        for (const carts of cart) {
            if (carts.id === camera.id) {
                alert('Already Selected This Product')
                return;
            }
        }
        const newCart = [...cart, camera];
        setCart(newCart);
    }
    const clearCart = () => {
        setCart([]);
        setRandomProduct([])
    }
    const [randomProduct, setRandomProduct] = useState({})
    const randomCreate = () => {
        const createRandomNumber = Math.floor(Math.random() * cart.length)
        const setRandomNumber = cart[createRandomNumber]
        setRandomProduct(setRandomNumber);
    }
    return (
        <div className='shop-container'>
            <div className='camera-container' >
                {
                    cameras.map(camera => <Camera
                        key={camera.id}
                        camera={camera}
                        setCartHandle={setCartHandle}
                    ></Camera>)
                }
            </div>
            <div className="chart-container">
                <Cart cart={cart}
                    clearCart={clearCart}
                    randomCreate={randomCreate}
                    randomProduct={randomProduct}
                ></Cart>
            </div>

        </div>
    );
};

export default Shop;