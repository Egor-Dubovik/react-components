import React, { FC, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/hooks';
import { selectQuery, setQuery } from './searchSlice';
import { ResetButton } from '../../../components/UI/buttons/ResetButton/ResetButton';
import MyInput from '../../../components/UI/input/MyInput';
import classes from './SearchBar.module.css';

interface ISearchState {
  query: string;
  buttonVisibility: 'hidden' | 'visible';
}

const SearchBar: FC = () => {
  const search = useAppSelector(selectQuery);
  const dispatch = useAppDispatch();
  const [state, setState] = useState<ISearchState>({ query: search, buttonVisibility: 'visible' });

  const onInputChange = async (event: FormEvent<HTMLInputElement>): Promise<void> => {
    const query = event.currentTarget.value;
    const inputText = event.currentTarget.value.trim();
    inputText !== ''
      ? setState({ query, buttonVisibility: 'visible' })
      : setState({ query, buttonVisibility: 'hidden' });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(setQuery(state.query));
  };

  const resetSerch = (): void => {
    setState({ query: '', buttonVisibility: 'hidden' });
    dispatch(setQuery(''));
  };

  return (
    <div className={classes.SearchBar}>
      <form className={classes.SearchForm} onSubmit={handleSubmit}>
        <MyInput
          onChange={(event) => onInputChange(event)}
          type="text"
          placeholder="Search..."
          value={state.query}
        />
        <button className={classes.SearchButton} type="submit">
          Submit
        </button>
      </form>
      <ResetButton style={{ visibility: state.buttonVisibility }} onClick={resetSerch} />
    </div>
  );
};

export default SearchBar;
