import { createSlice } from '@reduxjs/toolkit';
import booksActions from './actions/index';

const bookSlice = createSlice({
  name: 'bookSlice',
  initialState: {
    books: [],
    filterBooks: [],
    filter: false,
    filterVal: 'All',
  },
  reducers: booksActions(),
});

export const bookSliceActions = bookSlice.actions;

export default bookSlice;
