import { ACCESS_KEY } from '../common/constants/app';

export const getData = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
      'Accept-Version': 'v1',
    },
  });
  const data = await response.json();
  return data;
};
