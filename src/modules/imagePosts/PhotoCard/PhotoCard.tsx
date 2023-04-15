import React, { FC, useState } from 'react';
import { IPhotosResult } from '../../../common/types/cardsList';
import Like from '../../../components/Like/Like';
import PhotoModal from '../PhotoModal.tsx/PhotoModal';
import Image from '../../../components/Image/Image';
import classes from './PhotoCard.module.css';

interface ICardProps {
  photo: IPhotosResult;
}

const Card: FC<ICardProps> = ({ photo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PhotoModal photo={photo} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <li className={classes.PhotoCardWraper} onClick={() => setIsOpen(true)}>
        <a href="/htttps" onClick={(event) => event.preventDefault()}>
          <ul className={classes.PhotoCard}>
            <li className={classes.ImageBox}>
              <Image src={photo.urls.small} />
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
