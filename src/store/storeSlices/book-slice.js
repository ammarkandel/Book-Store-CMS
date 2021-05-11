import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'bookSlice',
  initialState: {
    books: [],
  },
  reducers: {
    createBook(state, action) {
      const newItem = action.payload;
      const existingItem = state.books.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.books.push({ id: newItem.id, title: newItem.title, category: newItem.category });
      }
    },
    removeBook(state, action) {
      const id = action.payload;
      const existingItem = state.books.find((item) => item.id === id);
      if (existingItem.length === 1) {
        state.books = state.books.filter((item) => item.id !== id);
      }
    },
  },
});

export const bookSliceActions = bookSlice.actions;

export default bookSlice;
