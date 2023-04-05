import React, { FC } from 'react';
import { IPhotosResult } from '../../../types/cardsList';
import Like from '../../Like/Like';
import classes from './PhotoModal.module.css';

interface IMainModalProps {
  isOpen: boolean;
  onClose: () => void;
  photo: IPhotosResult;
}

const PhotoModal: FC<IMainModalProps> = ({ isOpen, onClose, photo }) => {
  if (!isOpen) return null;

  return (
    <div className={classes.overlay} onClick={onClose}>
      <div className={classes.MainModal} onClick={(e) => e.stopPropagation()}>
        <div className={classes.ImageBox}>
          <img className={classes.Image} src={photo.urls.small} alt="photo image" />
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
