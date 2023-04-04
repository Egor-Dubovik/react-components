import { API_URL } from '../common/constants/app';
import { IPhotosData } from '../types/cardsList';
import { getData } from './getData';

type IPhotosOrder = 'latest' | 'oldest' | 'popular';

interface IGetPhotosParams {
  page: number;
  perPage: number;
  query: string;
  orderBy: IPhotosOrder;
}

export const getPhotos = async (params: IGetPhotosParams): Promise<IPhotosData> => {
  const url = `${API_URL}search/photos/?page=${params.page}&per_page=${params.perPage}&order_by=${params.orderBy}&query=${params.query}`;
  return (await getData(url)) as Promise<IPhotosData>;
};
