import React, { FC, useEffect, useState } from 'react';
import { ICardsListProps, IPhotosData } from 'types/cardsList';
import Card from '../../components/UI/card/Card';
import { getPhotos } from '../../services/getPhotos';
import classes from './CardsList.module.css';

const CardsList: FC<ICardsListProps> = ({ searchQuery }) => {
  const [photosData, setPhotosData] = useState<IPhotosData | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      const data = await getPhotos({ page: 1, perPage: 10, query: searchQuery, orderBy: 'latest' });
      setPhotosData(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [searchQuery]);

  useEffect(() => {
    console.log(photosData);
  }, [photosData]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className={classes.CardsList}>
          {photosData ? (
            <>
              {photosData.results.map((photo) => (
                <Card key={photo.id} photo={photo} />
              ))}
            </>
          ) : (
            <p>Error: {error?.message}</p>
          )}
        </ul>
      )}
    </>
  );
};

export default CardsList;
