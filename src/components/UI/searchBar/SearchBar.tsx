import React, { Component, FormEvent, MouseEvent } from 'react';
import { ResetButton } from '../buttons/ResetButton/ResetButton';
import MyInput from '../input/MyInput';
import classes from './SearchBar.module.css';

interface ISearch {
  query: string;
}

interface ISearchState extends ISearch {
  buttonVisibility: 'hidden' | 'visible';
}

interface ISearchProps {
  setSearch: (searchState: ISearch) => void;
}

class SearchBar extends Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = { query: '', buttonVisibility: 'hidden' };
  }

  onInputChange = (event: FormEvent<HTMLInputElement>): void => {
    const query = event.currentTarget.value;
    const inputText = event.currentTarget.value.trim();

    inputText !== ''
      ? this.setState({ query: query, buttonVisibility: 'visible' })
      : this.setState({ query: query, buttonVisibility: 'hidden' });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.setSearch(this.state);
  };

  resetSerch = (): void => {
    this.setState({ query: '', buttonVisibility: 'hidden' });
    this.props.setSearch({ query: '' });
  };

  render() {
    return (
      <div className={classes.SearchBar}>
        <form className={classes.SearchForm} onSubmit={this.handleSubmit}>
          <MyInput
            onChange={this.onInputChange}
            type="text"
            placeholder="Search..."
            value={this.state.query}
          />
          <input className={classes.SearchButton} type="submit" />
        </form>
        <ResetButton
          style={{ visibility: this.state.buttonVisibility }}
          onClick={this.resetSerch.bind(this)}
        />
      </div>
    );
  }
}

export default SearchBar;
