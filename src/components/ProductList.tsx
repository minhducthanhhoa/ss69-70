import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import ProductItem from './ProductItem';
import { addToCart } from '../redux/reducers/cartReducer';

const ProductList: React.FC = () => {
    const products = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();
    const [showNotification, setShowNotification] = useState(false);

    const handleAddToCart = (product: any) => {
        dispatch(addToCart(product));
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000); 
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem key={product.id} product={product} addToCart={handleAddToCart} />
            ))}
            {showNotification && (
                <div className="mt-4 p-2 bg-green-200 text-green-700 rounded">
                    Add to cart successfully
                </div>
            )}
        </div>
    );
};

export default ProductList;
