import React from 'react';
import CardsList from '../modules/imagePosts/CardsList/CardsList';
import SearchBar from '../modules/imagePosts/searchBar/SearchBar';

const MainPage = (): JSX.Element => {
  return (
    <section className="main-page">
      <SearchBar />
      <CardsList></CardsList>
    </section>
  );
};

export default MainPage;
