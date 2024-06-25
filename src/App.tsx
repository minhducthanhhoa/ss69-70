import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="app-container flex justify-between">
                <div className="product-section w-2/3">
                    <ProductList />
                </div>
                <div className="cart-section w-1/3">
                    <Cart />
                </div>
            </div>
        </Provider>
    );
};

export default App;
