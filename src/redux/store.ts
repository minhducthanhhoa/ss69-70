import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import cartReducer, { CartItem } from './reducers/cartReducer';
import { Product } from './reducers/productReducer'; 

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    }
});

export type RootState = {
    products: Product[];
    cart: CartItem[];
};
export type AppDispatch = typeof store.dispatch;
