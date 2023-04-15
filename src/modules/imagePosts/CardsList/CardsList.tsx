import React from 'react';
import Card from '../PhotoCard/PhotoCard';
import classes from './CardsList.module.css';
import MainLoader from '../../../components/loaders/MainLoader/MainLoader';
import { useGetCardListQuery } from './cardsListAPI';
import { useAppSelector } from '../../../app/hooks/hooks';
import { selectQuery } from '../searchBar/searchSlice';

interface ApiError {
  data: {
    status: number;
    errors: string[];
  };
}

const CardsList: React.FC = () => {
  const search = useAppSelector(selectQuery);
  const page = 1;
  const perPage = 12;
  const sortTerm = 'latest';
  const { data, isLoading, error } = useGetCardListQuery({
    page,
    perPage,
    orderBy: sortTerm,
    query: search,
  });

  console.log(data);
  if (error) {
    const errorData = (error as ApiError).data;
    return <p>Error: {errorData.errors}</p>;
  }

  return (
    <>
      {isLoading ? (
        <MainLoader />
      ) : (
        <>
          <p>{data?.results.length === 0 && `No results`}</p>
          <ul className={classes.CardsList}>
            {data?.results.map((photo) => (
              <Card key={photo.id} photo={photo} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default CardsList;
