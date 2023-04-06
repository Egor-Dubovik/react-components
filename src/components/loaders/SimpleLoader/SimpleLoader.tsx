import React from 'react';
import classes from './SimpleLoader.module.css';

const SimpleLoader = (): JSX.Element => {
  return <span className={classes.SimpleLoader} data-testid="simple-loader"></span>;
};

export default SimpleLoader;
