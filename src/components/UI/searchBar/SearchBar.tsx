import React, { Component, FormEvent } from 'react';

interface ISearch {
  query: string;
}

interface IState {
  query: string;
}

interface IProps {
  setSearch: (searchState: ISearch) => void;
}

class SearchBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { query: '' };
  }

  onInputChange = (event: FormEvent<HTMLInputElement>): void => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.setSearch(this.state);
  };

  render() {
    return (
      <div className="serch-bar">
        <form className="serch__form" onSubmit={this.handleSubmit}>
          <input
            className="serch__input"
            type="text"
            onChange={this.onInputChange}
            placeholder="Search..."
            value={this.state.query}
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
