export interface IProductCardData {
  name: string;
  brend: string;
  price: number;
  oldPrice: number | string;
  year: number;
  rating: number;
  amount: number;
  src: string;
  details: string[];
  color: string[];
  popular: boolean;
  favorite: boolean;
}

export interface ICardsListState {
  productArray: Array<IProductCardData>;
  search: string;
}

export interface ICardsListProps {
  products: Array<IProductCardData>;
  searchQuery: string;
}
