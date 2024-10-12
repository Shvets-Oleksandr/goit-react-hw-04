import css from './SearchBar.module.css';

import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements.searchInput.value.trim();
    onSubmit(inputValue);
    event.target.reset();
  };
  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.formBtn} type="submit">
          <IoSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
