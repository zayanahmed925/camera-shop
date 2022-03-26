import './Cart.css';
const Cart = (props) => {
    let { cart, clearCart, randomCreate, randomProduct } = props;
    return (
        <div>
            <h2 className="cart-title">Selected Camera</h2>
            {
                cart.map(camera => <h4 className='selected-camera' key={camera.id}>  Name: {camera.name}</h4>)
            }
            <div className="random-container">
                <button className='random-btn' onClick={randomCreate}>Random Choose</button>

            </div>
            <h2 className='random-product'>{randomProduct?.name} </h2>
            <div className="clear-container">
                <button className='clear-btn' onClick={clearCart} >Clear Cart</button>
            </div>
        </div>
    );
};

export default Cart;