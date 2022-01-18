import Button from '../Utils/Button/Button';
import PropTypes from 'prop-types';
import ContactData from './ContactData';
import style from './Contact.module.css';
import { TiUserDelete } from 'react-icons/ti';
import { IoMdContact } from 'react-icons/io';

const { contact__item } = style;

const Contact = ({ contacts, onDelete }) =>
  contacts.map(({ id, name, number }) => (
    <li key={id} className={contact__item}>
      <ContactData
        name={name}
        phone={number}
        photo={<IoMdContact size={'100%'} />}
      />
      <Button
        type="button"
        styleFor="delete"
        onClick={() => onDelete(id)}
        text={<TiUserDelete />}
      />
    </li>
  ));

export default Contact;

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
