import { useSelector } from 'react-redux';

import { Contact } from 'components';
import { selectNameFilter, selectContacts } from '../../redux/selectors';

export function ContactList() {
  const currentContacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleValue = currentContacts.filter(
    item =>
      item.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      item.number.includes(filter.toLowerCase().trim())
  );

  return (
    visibleValue && (
      <ul>
        {visibleValue.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    )
  );
}
