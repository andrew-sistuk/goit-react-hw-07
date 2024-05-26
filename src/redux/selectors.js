export const selectContacts = state => state.contacts.items;

export const selectContactsLoading = state => state.contacts.loading;

export const selectContactsError = state => state.contacts.error;

export const selectContactsEdit = state => state.contacts.editingContact;

export const selectNameFilter = state => state.filters.name;

export const selectVisibleContacts = (state) => {
  const filterName = selectNameFilter(state);
  const items = selectContacts(state);

  return items.filter(
    item =>
      item.name.toLowerCase().includes(filterName.toLowerCase().trim()) ||
      item.number.includes(filterName.toLowerCase().trim())
  );
};
