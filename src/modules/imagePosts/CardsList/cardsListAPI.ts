import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ACCESS_KEY, API_URL } from '../../../common/constants/app';
import { ISearchPhotosData } from '../../../common/types/cardsList';

export type IPhotosOrder = 'latest' | 'oldest' | 'popular';
export interface IGetPhotosParams {
  page: number;
  perPage: number;
  orderBy: IPhotosOrder;
}
export interface ISearchPhotosParams extends IGetPhotosParams {
  query: string;
}

export const cardlistApi = createApi({
  reducerPath: 'cardList',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getCardList: builder.query<ISearchPhotosData, ISearchPhotosParams>({
      query: (params) => ({
        // url: `photos/?page=${params.page}&per_page=${params.perPage}&order_by=${params.orderBy}`,
        url: `search/photos/?page=${params.page}&per_page=${params.perPage}&order_by=${params.orderBy}&query=${params.query}`,
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
          'Accept-Version': 'v1',
        },
      }),
    }),
  }),
});

export const { useGetCardListQuery } = cardlistApi;
