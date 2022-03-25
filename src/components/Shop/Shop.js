import React, { useEffect, useState } from 'react';
import Camera from '../Camera/Camera';
import './Shop.css'

const Shop = () => {
    const [cameras, setCameras] = useState([]);
    useEffect(() => {
        fetch('camera.json')
            .then(res => res.json())
            .then(data => setCameras(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='camera-container' >
                {
                    cameras.map(camera => <Camera key={camera.id} camera={camera}></Camera>)
                }
            </div>
            <div className="chart-container">
                <h2>Selected Camera</h2>
            </div>

        </div>
    );
};

export default Shop;