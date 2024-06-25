import React from 'react';

interface ProductItemProps {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
        stock: number;
    };
    addToCart: (product: any) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
    return (
        <div className="flex justify-between items-center border p-2">
            <div>
                <img src={product.image} alt={product.name} className="w-16 h-16" />
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p>{product.description}</p>
            </div>
            <div className="flex flex-col items-center">
                <button
                    onClick={() => addToCart(product)}
                    className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
                >
                    {product.price} USD
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
