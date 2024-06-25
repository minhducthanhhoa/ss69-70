import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    stock: number;
}

const initialState: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

const saveToLocalStorage = (state: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(state));
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity + 1 > existingItem.stock) {
                    alert('Số lượng sản phẩm vượt quá số lượng trong kho');
                } else {
                    existingItem.quantity += 1;
                }
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
            saveToLocalStorage(state);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const newState = state.filter(item => item.id !== action.payload);
            saveToLocalStorage(newState);
            return newState;
        },
        updateQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            const item = state.find(item => item.id === action.payload.id);
            if (item) {
                if (action.payload.quantity > item.stock) {
                    alert('Số lượng sản phẩm vượt quá số lượng trong kho');
                } else {
                    item.quantity = action.payload.quantity;
                }
            }
            saveToLocalStorage(state);
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
