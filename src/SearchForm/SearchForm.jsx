import style from './SearchForm.module.css';
import PropTypes from 'prop-types';

const { searchForm, searchForm__label } = style;

const SearchForm = ({ filter, filterChange }) => (
  <label className={searchForm__label}>
    Find contacts by name
    <input
      autoComplete="off"
      className={searchForm}
      value={filter}
      onChange={filterChange}
      type="text"
      name="filter"
    />
  </label>
);

export default SearchForm;

SearchForm.propType = {
  filter: PropTypes.string,
};
