export interface ISearch {
  query: string;
}

export interface ISearchState extends ISearch {
  buttonVisibility: 'hidden' | 'visible';
}

export interface ISearchProps {
  setSearch: (searchState: ISearch) => void;
}
