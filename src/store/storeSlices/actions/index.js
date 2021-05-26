const booksActions = () => {
  const result = {
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
      state.filterVal = action.payload;
      state.filterBooks = state.books.filter((item) => item.category === state.filterVal);
      if (state.filterVal !== 'All') {
        state.filter = true;
      } else {
        state.filter = false;
      }
    },
  };
  return result;
};

export default booksActions;
