// import { configureStore } from '@reduxjs/toolkit';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { articlesReducer } from './articles/articles.reduser';

// const articlesConfig = {
//   key: 'articles',
//   storage,
//   whitelist: ['articles'],
//   // blacklist: ['isLoading', 'error'],
// };

// export const store = configureStore({
//   reducer: {
//     articlesStore: persistReducer(articlesConfig, articlesReducer),
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
