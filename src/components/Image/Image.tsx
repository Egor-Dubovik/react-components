import React, { FC, useState } from 'react';
import SimpleLoader from '../loaders/SimpleLoader/SimpleLoader';
import classes from './Image.module.css';

interface IImageProps {
  src: string;
  alt?: string;
}

const Image: FC<IImageProps> = ({ src, alt }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const getImageClasses = (): string => {
    return loading ? `${classes.Image} ${classes.Visibility}` : classes.Image;
  };

  return (
    <>
      <img
        className={getImageClasses()}
        onLoad={() => setLoading(false)}
        alt={alt ? alt : 'image'}
        src={src}
      />
      {loading && <SimpleLoader />}
    </>
  );
};

export default Image;
