import React, { Component } from 'react';
import { ICardsListProps, ICardsListState, IProductCardData } from 'types/cardsList';
import { storage } from 'utils/localStorage';
import Card from '../card/Card';
import classes from './CardsList.module.css';

const filterProductsByString = ({ productArray, search }: ICardsListState): IProductCardData[] => {
  return productArray.filter((product) => {
    const searchQuery = `${product.brend} ${product.name}`;
    return searchQuery.toLowerCase().includes(search.toLowerCase());
  });
};

class CardsList extends Component<ICardsListProps, ICardsListState> {
  constructor(props: ICardsListProps) {
    super(props);
    this.state = {
      productArray: props.products,
      search: '',
    };
  }

  static getDerivedStateFromProps(
    props: ICardsListProps,
    state: ICardsListState
  ): ICardsListState | null {
    const filterProducts = filterProductsByString({
      productArray: props.products,
      search: props.searchQuery,
    });
    return { search: state.search, productArray: filterProducts };
  }

  render() {
    return (
      <>
        <ul className={classes.CardsList}>
          {this.state.productArray.length > 0
            ? this.state.productArray.map((product) => (
                <Card key={product.name} product={product} />
              ))
            : 'Nothing found'}
        </ul>
      </>
    );
  }
}

export default CardsList;
