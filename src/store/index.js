/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './storeSlices/book-slice'

const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
  }
});

export default store;
