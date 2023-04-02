import React, { FC, useEffect, useState } from 'react';
import { ICardsListProps, ICardsListState, IProductCardData } from 'types/cardsList';
import Card from '../../components/UI/card/Card';
import classes from './CardsList.module.css';

const filterProductsByString = ({ productArray, search }: ICardsListState): IProductCardData[] => {
  return productArray.filter((product) => {
    const searchQuery = `${product.brend} ${product.name}`;
    return searchQuery.toLowerCase().includes(search.toLowerCase());
  });
};

const CardsList: FC<ICardsListProps> = ({ products, searchQuery }) => {
  const [state, setState] = useState<ICardsListState>({
    productArray: products,
    search: '',
  });

  useEffect(() => {
    const filterProducts = filterProductsByString({
      productArray: products,
      search: searchQuery,
    });
    setState({ productArray: filterProducts, search: searchQuery });
  }, [products, searchQuery]);

  return (
    <ul className={classes.CardsList}>
      {state.productArray.length > 0
        ? state.productArray.map((product) => <Card key={product.name} product={product} />)
        : 'Nothing found'}
    </ul>
  );
};

export default CardsList;
