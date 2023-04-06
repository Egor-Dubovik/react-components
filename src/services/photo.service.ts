import { API_URL } from '../common/constants/app';
import { ISearchPhotosData, IPhotosResult } from '../types/cardsList';
import { getData } from './getData';

export type IPhotosOrder = 'latest' | 'oldest' | 'popular';

export interface IGetPhotosParams {
  page: number;
  perPage: number;
  orderBy: IPhotosOrder;
}

export interface ISearchPhotosParams extends IGetPhotosParams {
  query: string;
}

export const getPhotos = async (params: IGetPhotosParams): Promise<IPhotosResult[]> => {
  const url = `${API_URL}photos/?page=${params.page}&per_page=${params.perPage}&order_by=${params.orderBy}`;
  return (await getData(url)) as Promise<IPhotosResult[]>;
};

export const searchPhotos = async (params: ISearchPhotosParams): Promise<ISearchPhotosData> => {
  const url = `${API_URL}search/photos/?page=${params.page}&per_page=${params.perPage}&order_by=${params.orderBy}&query=${params.query}`;
  return (await getData(url)) as Promise<ISearchPhotosData>;
};
