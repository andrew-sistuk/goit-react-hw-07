import { FaUserAstronaut } from 'react-icons/fa';
import { CgSmartphone } from 'react-icons/cg';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice';

import css from './Contact.module.css';

export function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <li className={css['contact-box']}>
      <div className={css['contact-info']}>
        <div className={css['contact-info-item']}>
          <FaUserAstronaut />
          <p>{name}</p>
        </div>
        <div className={css['contact-info-item']}>
          <CgSmartphone />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
}
