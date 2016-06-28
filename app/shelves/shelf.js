import React from 'react';
import Search from './search.js';
import Highlight from './highlight.js';
import BookLink from './booklink.js';

import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

import Highlights from './highlights.js';

import ReactMarkdown from 'react-markdown';

export default class Shelf extends React.Component {

  state = {
    books: { data: [] },
    highlights: { data:[] }
  };

  // componentDidMount() {
  //   fetch('/books').then(
  //     res => res.json().then( this.refreshBooks )
  //   );
  // }

  search = (query) => {

    fetch(`/search?query=${query}` ).then(
      res => res.json().then( this.refreshList )
    );

  }

  mapHighlight = hit => {
    return <Highlight key={`high-${hit._id}`} source={hit._source} />;
  }

  mapBook = book => {
    return <BookLink key={`high-${book._id}`} book={hit.book} />;
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
        <AppBar title="Cordel">
          <Search onSubmit={this.search} />
          <FlatButton
            linkButton={true}
            href="/logout"
            secondary={true}
            style={{ "margin" : "auto" }}
            icon={<FontIcon className="fa fa-sign-out" />}
          />
        </AppBar>
        <Highlights highlights={[
          {
            paragraph_id: 30,
            text: 'ExpressJS, ES6/7'
          },
          {
            paragraph_id: 33,
            text: 'Product Owner, Coach e Engenheiro,'
          },
          {
            paragraph_id: 35,
            text: 'acompanhando após o evento pela Produto'
          }
        ]}>
          {highlights}
          {books}

          <ReactMarkdown source={this.props.contents} />

        </Highlights>
      </div>
    );
  }
}
