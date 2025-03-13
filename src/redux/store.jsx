import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice"; // Ensure correct path to booksSlice.js

export const store = configureStore({
  reducer: {
    books: booksReducer, // Ensure this matches your slice
  },
});

export default store; // ✅ This ensures both named & default exports
