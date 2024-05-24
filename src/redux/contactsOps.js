import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66507533ec9b4a4a60322716.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const result = axios.get('/contacts');
    return result.data;
  } catch (e) {
    thunkAPI.rejectWidthValue(e.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async () => { });
export const deleteContact  = createAsyncThunk('contacts/deleteContact', async () => { });

// export const editContact  = createAsyncThunk('contacts/editContact', async () => { });