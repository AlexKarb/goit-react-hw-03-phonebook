import SearchForm from '../SearchForm/SearchForm';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

const ContactsList = ({
  filterContact,
  allContacts,
  onChange,
  filter,
  onDelete,
}) => {
  const contactsList = filterContact.length === 0 ? allContacts : filterContact;
  const haveContact = contactsList.length > 0;

  return !haveContact ? (
    <div>No contacts</div>
  ) : (
    <>
      <SearchForm filter={filter} onChange={onChange} />
      <ul>
        <Contact contacts={contactsList} onDelete={onDelete} />
      </ul>
    </>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  filterContact: PropTypes.array,
  allContacts: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
