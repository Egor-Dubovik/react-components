import React, { FC, useState } from 'react';
import SearchBar from 'components/searchBar/SearchBar';
import CardsList from 'modules/CardsList/CardsList';
import cardJson from '../data/products.json';
import { ISearch } from 'types/search';
import { storage } from 'utils/localStorage';

const MainPage: FC = () => {
  const [state, setState] = useState({ query: storage.get('Search') || '' });

  const setSearchState = (searchState: ISearch): void => {
    setState(searchState);
  };

  return (
    <section className="main-page">
      <SearchBar setSearch={setSearchState} />
      <CardsList searchQuery={state.query}></CardsList>
    </section>
  );
};

export default MainPage;
