import { createSlice } from '@reduxjs/toolkit';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    stock: number; 
}

const initialState: Product[] = [
    { id: 1, name: 'Pizza', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!', price: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmgLHqaq6lnXTSWE8BBSj-sBMYQ1gakIgTQ&s', stock: 10 },
    { id: 2, name: 'Hamburger', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!', price: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hyYyXei4VXe60B04IQbHcVLmQFM_sl8KdA&s', stock: 20 },
    { id: 3, name: 'Bread', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN4FOaYwWrjDt3-oK2KTqvHousKIj4yE2W7g&s', stock: 15 },
    { id: 4, name: 'Cake', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!', price: 10, image: 'https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg', stock: 25 },
];

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
});

export default productSlice.reducer;
