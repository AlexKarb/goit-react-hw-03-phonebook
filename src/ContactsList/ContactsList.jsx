import SearchForm from '../SearchForm/SearchForm';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

const ContactsList = ({ contactsList, filter, onChange, onDelete }) =>
  contactsList.length === 0 ? (
    <div>No contacts</div>
  ) : (
    <>
      <SearchForm filterChange={onChange} filter={filter} />
      <ul>
        <Contact contacts={contactsList} onDelete={onDelete} />
      </ul>
    </>
  );

export default ContactsList;

ContactsList.propTypes = {
  contactsList: PropTypes.array.isRequired,
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
