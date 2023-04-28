import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ marginBottom: 20 }}>Error 404, page not found</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
