import React, { Component, FormEvent, MouseEvent } from 'react';
import classes from './SearchBar.module.css';

interface ISearch {
  query: string;
}

interface IState {
  query: string;
  buttonVisibility: 'hidden' | 'visible';
}

interface IProps {
  setSearch: (searchState: ISearch) => void;
}

class SearchBar extends Component<IProps, IState> {
  constructor(props: IProps) {
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

  resetSerch(): void {
    this.setState({ query: '' });
    this.props.setSearch({ query: '' });
  }

  render() {
    return (
      <div className={classes.SearchBar}>
        <form className={classes.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={classes.SearchInput}
            type="text"
            onChange={this.onInputChange}
            placeholder="Search..."
            value={this.state.query}
          />
          <input className={classes.SearchButton} type="submit" />
        </form>
        <button
          className={classes.ResetButton}
          style={{ visibility: this.state.buttonVisibility }}
          onClick={this.resetSerch.bind(this)}
        ></button>
      </div>
    );
  }
}

export default SearchBar;
