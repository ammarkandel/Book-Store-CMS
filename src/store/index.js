import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './storeSlices/bookSlice';

const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
  },
});

export default store;
