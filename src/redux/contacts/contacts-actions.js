import { createAction } from '@reduxjs/toolkit';

export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactSuccses = createAction('contacts/addContactSuccses');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactsRequest = createAction(
  'contacts/deleteContactsRequest'
);
export const deleteContactSuccses = createAction(
  'contacts/deleteContactSuccses'
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
);
export const fetchContactSuccses = createAction('contacts/fetchContactSuccses');
export const fetchContactError = createAction('contacts/fetchContactError');

export const setFilter = createAction('contacts/setFilter');
