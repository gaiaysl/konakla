import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Category {
  id: number;
  title: string;
  slug: string;
}

interface CategoryState {
  categories: Category[];
  selectedCategory: string | null;
}

const initialState: CategoryState = {
  categories: [],
  selectedCategory: null,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    
  },
});

export const { setSelectedCategory } = categorySlice.actions;


export default categorySlice.reducer;
