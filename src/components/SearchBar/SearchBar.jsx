import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';

const INITIAL_STATE = {
  searchQuery: '',
};

export class Searchbar extends Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const {
      Searchbar,
      SearchForm,
      SearchFormButton,
      SearchFormInput,
      SearchFormButtonLabel,
    } = styles;
    const { searchQuery } = this.state;

    return (
      <header className={Searchbar}>
        <form className={SearchForm} onSubmit={this.handleSubmit}>
          <button className={SearchFormButton} type="submit"></button>

          <input
            className={SearchFormInput}
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
