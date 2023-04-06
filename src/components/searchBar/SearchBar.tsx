import React, { FC, FormEvent, useEffect, useState } from 'react';
import { ISearchProps, ISearchState } from 'types/search';
import { storage } from 'utils/localStorage';
import { ResetButton } from '../UI/buttons/ResetButton/ResetButton';
import MyInput from '../UI/input/MyInput';
import classes from './SearchBar.module.css';

const SearchBar: FC<ISearchProps> = ({ setSearch }) => {
  const [state, setState] = useState<ISearchState>({ query: '', buttonVisibility: 'hidden' });

  const onInputChange = async (event: FormEvent<HTMLInputElement>): Promise<void> => {
    const query = event.currentTarget.value;
    const inputText = event.currentTarget.value.trim();

    inputText !== ''
      ? setState({ query, buttonVisibility: 'visible' })
      : setState({ query, buttonVisibility: 'hidden' });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSearch(state);
  };

  const resetSerch = (): void => {
    setState({ query: '', buttonVisibility: 'hidden' });
    setSearch({ query: '' });
    storage.set('Search', '');
  };

  useEffect(() => {
    const localQuery = storage.get('Search') || '';
    setState({ query: localQuery, buttonVisibility: 'visible' });
  }, []);

  useEffect(() => {
    storage.set('Search', state.query);
  }, [state.query]);

  return (
    <div className={classes.SearchBar}>
      <form className={classes.SearchForm} onSubmit={handleSubmit}>
        <MyInput
          onChange={(event) => onInputChange(event)}
          type="text"
          placeholder="Search..."
          value={state.query}
        />
        <input className={classes.SearchButton} type="submit" />
      </form>
      <ResetButton style={{ visibility: state.buttonVisibility }} onClick={resetSerch.bind(this)} />
    </div>
  );
};

export default SearchBar;
