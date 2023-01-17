import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

axios.defaults.baseURL = 'https://63c16f9771656267187b23e2.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number, id }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name,
        number,
        id: nanoid(),
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = () => async dispatch => {
//   dispatch();
//   try {
//     const response = await axios.get('/contacts');
//   } catch {}
// };

// export const addContact = () => async dispatch => {
//   dispatch();
//   try {
//     const response = await axios.get('/contacts');
//   } catch {}
// };

// export const deleteContact = () => async dispatch => {
//   dispatch();
//   try {
//     const response = await axios.get('/contacts');
//   } catch {}
// };
