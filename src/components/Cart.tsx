import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, updateQuantity } from '../redux/reducers/cartReducer';
import CartItem from './CartItem';

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const [showUpdateNotification, setShowUpdateNotification] = useState(false);
    const [showDeleteNotification, setShowDeleteNotification] = useState(false);

    const handleRemove = (id: number) => {
        const confirmed = window.confirm("Do you really want to remove this item?");
        if (confirmed) {
            dispatch(removeFromCart(id));
            setShowDeleteNotification(true);
            setTimeout(() => {
                setShowDeleteNotification(false);
            }, 3000); 
        }
    };

    const handleUpdateQuantity = (id: number, quantity: number) => {
        const product = cartItems.find(item => item.id === id);
        if (product && quantity > product.stock) {
            alert('Số lượng sản phẩm vượt quá số lượng trong kho');
        } else {
            dispatch(updateQuantity({ id, quantity }));
            setShowUpdateNotification(true);
            setTimeout(() => {
                setShowUpdateNotification(false);
            }, 3000); 
        }
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart p-4 border">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            {cartItems.length > 0 ? (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price} USD</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                                            className="w-16 text-center"
                                        />
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleUpdateQuantity(item.id, item.quantity)}
                                            className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="bg-red-500 text-white px-2 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>There are {cartItems.length} items in your shopping cart.</p>
                    <div className="mt-4">
                        <h3>Total: {totalAmount} USD</h3>
                    </div>
                </>
            ) : (
                <p>Empty product in your cart</p>
            )}
            {showUpdateNotification && (
                <div className="mt-4 p-2 bg-yellow-200 text-yellow-700 rounded">
                    Update cart successfully
                </div>
            )}
            {showDeleteNotification && (
                <div className="mt-4 p-2 bg-red-200 text-red-700 rounded">
                    Delete cart successfully
                </div>
            )}
        </div>
    );
};

export default Cart;
