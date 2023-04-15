import React, { FC, useEffect, useState } from 'react';
import { IPhotosResult } from 'common/types/cardsList';
import { getPhotos, searchPhotos } from '../../../services/photo.service';
import Card from '../PhotoCard/PhotoCard';
import classes from './CardsList.module.css';
import MainLoader from '../../../components/loaders/MainLoader/MainLoader';

const CardsList: FC = () => {
  const [photosData, setPhotosData] = useState<IPhotosResult[]>([] as IPhotosResult[]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const page = 1;
  const perPage = 10;
  const sortTerm = 'latest';

  // const fetchPhotos = async (): Promise<IPhotosResult[]> => {
  //   if (searchQuery !== '') {
  //     const searchData = await searchPhotos({
  //       page,
  //       perPage,
  //       query: searchQuery,
  //       orderBy: sortTerm,
  //     });
  //     if (searchData.errors) throw new Error(searchData.errors?.join(' '));
  //     return searchData.results;
  //   }
  //   return await getPhotos({ page, perPage, orderBy: sortTerm });
  // };

  // const handlefetchPhotos = async (): Promise<void> => {
  //   try {
  //     setPhotosData([] as IPhotosResult[]);
  //     setLoading(true);
  //     const photos = await fetchPhotos();
  //     setPhotosData(photos);
  //   } catch (error) {
  //     setError(error as Error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   console.log(searchQuery);
  //   handlefetchPhotos();
  // }, [searchQuery]);

  // useEffect(() => {
  //   console.log(photosData);
  // }, [photosData]);

  return (
    <>
      {isLoading ? (
        <MainLoader />
      ) : (
        <ul className={classes.CardsList}>
          {photosData.length !== 0 ? (
            <>
              {photosData.map((photo) => (
                <Card key={photo.id} photo={photo} />
              ))}
            </>
          ) : (
            <p>{error ? `Error: ${error.message}` : 'Nothing found'}</p>
          )}
        </ul>
      )}
    </>
  );
};

export default CardsList;