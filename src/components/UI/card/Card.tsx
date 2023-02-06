import React, { FC } from 'react';
import { IProductCardData } from 'types/cardsList';
import classes from './Cards.module.css';

interface ICardComponent {
  product: IProductCardData;
}

const Card: FC<ICardComponent> = ({ product }) => {
  return (
    <li className={classes.CardWraper}>
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
};

export default Card;
