import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle(state, { payload }) {
      state.articles = [...state.articles, payload];
    },
    deleteArticle(state, { payload }) {
      state.articles = state.articles.filter(article => article.id !== payload);
    },
  },
});
// action generator
export const { deleteArticle, addArticle } = articlesSlice.actions;
// slice`s reducer
export const articlesReducer = articlesSlice.reducer;
