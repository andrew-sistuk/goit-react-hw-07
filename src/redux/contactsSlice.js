import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        console.log(action);
        state.items.push({
          id: nanoid(),
          name: action.payload.name,
          number: action.payload.number,
        });

        console.log(state.items);
        console.log(action.payload.name);
      },
      prepere(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name.trim(),
            number,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      state.items.splice(
        state.items.findIndex(item => item.id === action.payload),
        1
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
