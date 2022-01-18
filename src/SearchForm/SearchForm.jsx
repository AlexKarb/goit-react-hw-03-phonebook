import style from './SearchForm.module.css';
import PropTypes from 'prop-types';

const { searchForm, searchForm__label } = style;

const SearchForm = ({ filter, onChange }) => (
  <label className={searchForm__label}>
    Find contacts by name
    <input
      className={searchForm}
      value={filter}
      onChange={onChange}
      type="text"
      name="filter"
      label="Find contacts by name"
    />
  </label>
);

export default SearchForm;

SearchForm.propType = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
