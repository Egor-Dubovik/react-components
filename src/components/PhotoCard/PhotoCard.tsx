import React, { FC, useState } from 'react';
import { IPhotosResult } from '../../types/cardsList';
import Like from '../Like/Like';
import SimpleLoader from '../loaders/SimpleLoader/SimpleLoader';
import PhotoModal from '../Modal/PhotoModal.tsx/PhotoModal';
import classes from './PhotoCard.module.css';

interface ICardProps {
  photo: IPhotosResult;
}

const Card: FC<ICardProps> = ({ photo }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);

  const getImageClasses = (): string => {
    return loading ? `${classes.Image} ${classes.Image_visibility}` : classes.Image;
  };

  return (
    <>
      <PhotoModal photo={photo} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <li className={classes.PhotoCardWraper} onClick={() => setIsOpen(true)}>
        <a href="#" style={{ color: 'black' }}>
          <ul className={classes.PhotoCard}>
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
            <li>
              <Like likes={photo.likes} />
            </li>
          </ul>
        </a>
      </li>
    </>
  );
};

export default Card;

// <li className={classes.Item}>
// <h3>description:</h3>
// <p>{photo.alt_description}</p>
// </li>
