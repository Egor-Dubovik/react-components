import React, { Component, FormEvent } from 'react';
import { ISearchProps, ISearchState } from 'types/search';
import { storage } from 'utils/localStorage';
import { ResetButton } from '../UI/buttons/ResetButton/ResetButton';
import MyInput from '../UI/input/MyInput';
import classes from './SearchBar.module.css';

class SearchBar extends Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = { query: '', buttonVisibility: 'hidden' };
  }

  onInputChange = async (event: FormEvent<HTMLInputElement>): Promise<void> => {
    const query = event.currentTarget.value;
    const inputText = event.currentTarget.value.trim();

    inputText !== ''
      ? this.setState({ query: query, buttonVisibility: 'visible' })
      : this.setState({ query: query, buttonVisibility: 'hidden' });

    setTimeout(() => {
      this.props.setSearch(this.state);
    }, 300);
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  resetSerch = (): void => {
    this.setState({ query: '', buttonVisibility: 'hidden' });
    this.props.setSearch({ query: '' });
    storage.set('Search', '');
  };

  componentWillUnmount = (): void => {
    storage.set('Search', this.state.query);
  };

  componentDidMount = (): void => {
    const localQuery = storage.get('Search') || '';
    this.setState({ query: localQuery, buttonVisibility: 'visible' });
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
