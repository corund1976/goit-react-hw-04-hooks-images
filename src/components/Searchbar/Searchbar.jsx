import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [searchString, setSearchString] = useState('');

  const handleChange = e => setSearchString(e.target.value);
    
  const handleSubmit = e => {
    e.preventDefault();
    
    if (searchString.trim() === '') {
      alert("Введите запрос для поиска...");
      return;
    };
    
    onSubmit(searchString);
    resetForm();
  };

  const resetForm = () => setSearchString('');

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button__label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          value={searchString}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};