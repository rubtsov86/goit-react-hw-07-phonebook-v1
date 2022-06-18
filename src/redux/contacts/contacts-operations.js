import axios from 'axios';
import {
  addContactsRequest,
  addContactSuccses,
  addContactError,
  deleteContactsRequest,
  deleteContactSuccses,
  deleteContactError,
  fetchContactsRequest,
  fetchContactSuccses,
  fetchContactError,
} from './contacts-actions';

axios.defaults.baseURL = `https://62a758f5bedc4ca6d7c778ce.mockapi.io`;

export const addContact = contact => dispatch => {
  dispatch(addContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccses(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccses(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export const getInitialContact = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get(`/contacts`)
    .then(({ data }) => dispatch(fetchContactSuccses(data)))
    .catch(error => dispatch(fetchContactError(error)));
};
