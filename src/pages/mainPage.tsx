import React from 'react';
import SearchBar from 'modules/imagePosts/searchBar/SearchBar';
import CardsList from 'modules/imagePosts/CardsList/CardsList';

const MainPage = (): JSX.Element => {
  return (
    <section className="main-page">
      <SearchBar />
      <CardsList></CardsList>
    </section>
  );
};

export default MainPage;
