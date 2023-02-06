import React, { Component } from 'react';
import SearchBar from 'components/UI/searchBar/SearchBar';
import CardsList from 'components/UI/CardsList/CardsList';
import cardJson from '../data/products.json';
import { ISearch, ISearchProps } from 'types/search';

class MainPage extends Component {
  state = { query: '' };

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
