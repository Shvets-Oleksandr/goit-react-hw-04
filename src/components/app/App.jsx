import { useState } from 'react';

import SearchBar from '../searchBar/SearchBar';

import css from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  const onSubmit = searchValue => {
    console.log(searchValue);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={onSubmit} />
    </div>
  );
}

export default App;
