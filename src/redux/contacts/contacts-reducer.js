import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccses,
  deleteContactSuccses,
  fetchContactSuccses,
  setFilter,
} from './contacts-actions';

const itemReducer = createReducer([], {
  [fetchContactSuccses]: (state, { payload }) => [...payload],

  [addContactSuccses]: (state, { payload }) => [...state, { ...payload }],

  [deleteContactSuccses]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

export const contactsReduser = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
