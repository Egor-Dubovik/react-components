import React, { Component } from 'react';
import { ICardsListProps, ICardsListState, IProductCardData } from 'types/cardsList';
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
    console.log(this.props.searchQuery);

    return (
      <>
        <ul className={classes.CardsList}>
          {this.state.productArray.length > 0
            ? this.state.productArray.map((product) => {
                return (
                  <li className={classes.CardWraper} key={product.name}>
                    <ul className={classes.Card}>
                      <li className={classes.Image}>
                        <img src={product.name} alt="laptop image" />
                      </li>
                      <li className={classes.Item}>
                        <h3>
                          {product.brend} {product.name}
                        </h3>
                      </li>
                      <li className={classes.Item}>amount: {product.amount} </li>
                      <li className={classes.Item}>{product.details}</li>
                      <li className={classes.Item}>{product.year}</li>
                    </ul>
                  </li>
                );
              })
            : 'Nothing found'}
        </ul>
      </>
    );
  }
}

export default CardsList;
