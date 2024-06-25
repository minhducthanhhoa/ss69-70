import React from 'react';

interface CartItemProps {
    item: {
        id: number;
        name: string;
        price: number;
        quantity: number;
    };
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, removeFromCart, updateQuantity }) => {
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1) {
            updateQuantity(item.id, value);
        }
    };

    return (
        <div className="flex justify-between items-center border p-2 mb-2">
            <div>
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p>{item.price} USD</p>
            </div>
            <div className="flex items-center">
                <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={handleQuantityChange}
                    className="w-16 text-center"
                />
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
