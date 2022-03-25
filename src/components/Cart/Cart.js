const Cart = (props) => {
    let { cart, clearCart, randomCreate, randomProduct } = props
    return (
        <div>
            <h2>Selected Camera</h2>
            {
                cart.map(camera => <h4 key={camera.id}>  Name: {camera.name}</h4>)
            }
            <h2>ran: {randomProduct?.name} </h2>
            <button onClick={randomCreate}>Random Choose</button><br />
            <button onClick={clearCart} >Clear Cart</button>
        </div>
    );
};

export default Cart;