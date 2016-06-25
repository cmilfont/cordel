import React from 'react';
import Search from './search.js';
import Highlight from './highlight.js';
import BookLink from './booklink.js';

export default class Shelf extends React.Component {

  state = {
    books: { data: [] },
    highlights: { data:[] }
  };

  componentDidMount() {
    fetch('/books').then(
      res => res.json().then( this.refreshBooks )
    );
  }

  search = (query) => {

    fetch(`/search?query=${query}` ).then(
      res => res.json().then( this.refreshList )
    );

  }

  mapHighlight = hit => {
    return <Highlight id={`high-${hit._id}`} source={hit._source} />;
  }

  mapBook = book => {
    return <BookLink id={`high-${book._id}`} book={hit.book} />;
  }

  refreshBooks = books => {
    this.setState({
      books: {
        data: books.map(this.mapBook)
      }
    });
  }

  refreshList = list => {
    this.setState({
      highlights: {
        data: list.map(this.mapHighlight)
      }
    });
  }

  render() {

    const highlights = this.state.highlights.data;

    const books = this.state.books.data;

    return (
      <div>
        <Search onSubmit={this.search} />
        {highlights}
        {books}
      </div>
    );
  }
}
