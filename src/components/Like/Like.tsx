import React, { FC } from 'react';
import classes from './Like.module.css';

interface ILikeProps {
  likes: number;
}

const Like: FC<ILikeProps> = ({ likes }) => {
  return (
    <div className={classes.Like}>
      <div className={classes.Heart}></div>
      <h3 className={classes.Typography}>{likes}</h3>
    </div>
  );
};

export default Like;
