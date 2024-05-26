import { useSelector } from 'react-redux';

import { selectVisibleContacts  } from '../../redux/selectors';
import { Contact } from 'components';

export function ContactList() {
  const visibleValue = useSelector(selectVisibleContacts);

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
