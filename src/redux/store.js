import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsSlice from './contactsSlice';
import filtersSlice from './filtersSlice';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const filtersPersistConfig = {
  key: 'filters',
  storage,
};

const contactsPersistedReducer = persistReducer(contactsPersistConfig, contactsSlice);
const filtersPersistedReducer = persistReducer(filtersPersistConfig, filtersSlice);

export const appState = configureStore({
  reducer: {
    contacts: contactsPersistedReducer,
    filters: filtersPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(appState);
