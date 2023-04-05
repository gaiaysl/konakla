import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './redux/categorySlice';

const rootReducer = combineReducers({
  category: categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
