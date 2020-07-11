import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  inputHandler = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.inputHandler} />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
