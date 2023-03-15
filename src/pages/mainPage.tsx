import React, { Component } from 'react';
import SearchBar from 'components/searchBar/SearchBar';
import CardsList from 'modules/CardsList/CardsList';
import cardJson from '../data/products.json';
import { ISearch } from 'types/search';
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
