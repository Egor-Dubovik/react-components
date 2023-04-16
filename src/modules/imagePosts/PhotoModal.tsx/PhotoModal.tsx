import React, { FC } from 'react';
import { IPhotosResult } from '../../../common/types/cardsList';
import Like from '../../../components/Like/Like';
import Image from '../../../components/Image/Image';
import classes from './PhotoModal.module.css';

interface IMainModalProps {
  isOpen: boolean;
  onClose: () => void;
  photo: IPhotosResult;
}

const PhotoModal: FC<IMainModalProps> = ({ isOpen, onClose, photo }) => {
  if (!isOpen) return null;

  return (
    <div data-testid="overlay" className={classes.overlay} onClick={onClose}>
      <div
        data-testid="photo-modal"
        className={classes.MainModal}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={classes.ImageBox}>
          <Image src={photo.urls.small} />
        </div>
        <h3 className={classes.Title}>Author: {photo.user.username}</h3>
        <p className={classes.Typography}>
          Description: <span className={classes.Span}>{photo.alt_description}</span>
        </p>
        <div className={classes.Box}>
          <p className={classes.Typography}>
            Theme: <span>{photo.color}</span>
          </p>
          <div className={classes.Color} style={{ backgroundColor: photo.color }}></div>
        </div>
        <p className={classes.Typography}>
          Created at: <span className={classes.Span}>{photo.created_at}</span>
        </p>
        <div className={classes.Box} style={{ justifyContent: 'space-between' }}>
          <Like likes={photo.likes} />
          <button className={classes.CloseButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
