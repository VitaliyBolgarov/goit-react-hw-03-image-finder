import { Component } from 'react';
import './Searchbar.css';
import { toast } from 'react-hot-toast';

export class Searchbar extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query === '') {
      toast.error('Enter what you want to find please');
      return;
    }

    onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <button type="submit" className="SearchForm-button">
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}
