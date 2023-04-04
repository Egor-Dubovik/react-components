import React, { FC } from 'react';
import { IPhotosResult } from '../../../types/cardsList';
import classes from './Cards.module.css';

interface ICardProps {
  photo: IPhotosResult;
}

const Card: FC<ICardProps> = ({ photo }) => {
  return (
    <li className={classes.CardWraper}>
      <a href="#" style={{ color: 'black' }}>
        <ul className={classes.Card}>
          <li className={classes.Image}>
            <img src={photo.urls.small} alt="photo image" />
          </li>
          <li className={classes.Item}>
            <h3 style={{ fontWeight: 500 }}>Author: {photo.user.username}</h3>
          </li>
          <li className={classes.Item}>
            <h4>description:</h4>
            <p>{photo.alt_description}</p>
          </li>
          <li className={classes.Item}>likes: {photo.likes}</li>
        </ul>
      </a>
    </li>
  );
};

export default Card;
