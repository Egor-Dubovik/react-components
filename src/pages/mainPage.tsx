import React, { Component } from 'react';
import SearchBar from 'components/UI/searchBar/SearchBar';
import { SearchContext } from 'components/UI/layout/Layout';
import CardsList from 'components/UI/CardsList/CardsList';
import cardJson from '../data/products.json';

interface IState {
  count: number;
}

interface IProps {
  title?: string;
}

class MainPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <SearchContext.Consumer>
          {({ query }) => {
            return <CardsList products={cardJson.laptops} searchQuery={query}></CardsList>;
          }}
        </SearchContext.Consumer>
      </>
    );
  }
}

export default MainPage;
