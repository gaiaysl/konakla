import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../redux/categorySlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    
  },
});

export default store;
