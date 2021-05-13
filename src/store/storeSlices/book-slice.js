import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'bookSlice',
  initialState: {
    books: [],
    filterBooks: [],
    filter: false,
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
      state.books = state.books.filter((item) => item.id !== id);
      state.filterBooks = state.filterBooks.filter((item) => item.id !== id);
    },
    changeFilter(state, action) {
      const category = action.payload;
      if (category === 'All') {
        state.filter = false;
      } else {
        state.filter = true;
      }
      state.filterBooks = state.books.filter((item) => item.category === category);
    },
  },
});

export const bookSliceActions = bookSlice.actions;

export default bookSlice;
