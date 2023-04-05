import React, { FC, useState } from 'react';
import { IPhotosResult } from '../../types/cardsList';
import SimpleLoader from '../loaders/SimpleLoader/SimpleLoader';
import classes from './Cards.module.css';

interface ICardProps {
  photo: IPhotosResult;
}

const Card: FC<ICardProps> = ({ photo }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const getImageClasses = (): string => {
    return loading ? `${classes.Image} ${classes.Image_visibility}` : classes.Image;
  };

  return (
    <li className={classes.CardWraper}>
      <a href="#" style={{ color: 'black' }}>
        <ul className={classes.Card}>
          <li className={classes.ImageBox}>
            <img
              className={getImageClasses()}
              src={photo.urls.small}
              onLoad={() => setLoading(false)}
              alt="photo image"
            />
            {loading && <SimpleLoader />}
          </li>
          <li className={classes.Item}>
            <h3 className={classes.Title}>Author: {photo.user.username}</h3>
          </li>
          <li className={classes.Item}>
            <h3 className={classes.Title}>likes: {photo.likes}</h3>
          </li>
        </ul>
      </a>
    </li>
  );
};

export default Card;

// <li className={classes.Item}>
// <h3>description:</h3>
// <p>{photo.alt_description}</p>
// </li>
