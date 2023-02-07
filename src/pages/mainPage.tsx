import React, { Component } from 'react';
import SearchBar from 'components/UI/searchBar/SearchBar';
import CardsList from 'components/UI/CardsList/CardsList';
import cardJson from '../data/products.json';
import { ISearch, ISearchProps } from 'types/search';
import { storage } from 'utils/localStorage';

class MainPage extends Component {
  state = { query: storage.get('Search') || '' };

  setSearchState(searchState: ISearch): void {
    this.setState(searchState);
  }

  render() {
    return (
      <>
        <SearchBar setSearch={this.setSearchState.bind(this)} />
        <CardsList products={cardJson.laptops} searchQuery={this.state.query}></CardsList>
      </>
    );
  }
}

export default MainPage;
