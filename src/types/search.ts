export interface ISearch {
  query: string;
}

export type Visibility = 'hidden' | 'visible';

export interface ISearchState extends ISearch {
  buttonVisibility: Visibility;
}

export interface ISearchProps {
  setSearch: (searchState: ISearch) => void;
}
