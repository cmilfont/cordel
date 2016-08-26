import React from 'react';
import BookLink from './booklink';

export default class Shelf extends React.Component {

  state = {
    books: { data: [] }
  };

  componentDidMount() {
    // fetch('/books').then(
    //   res => res.json().then( this.refreshBooks )
    // );

    const books = [
      {
        id: 1,
        title: "Building Microservices 1st Edition",
        cover: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1491950358&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=milftech-20"
      },
      {
        id: 2,
        title: "Domain-Driven Design Reference: Definitions and Pattern Summaries",
        cover: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1457501198&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=milftech-20"
      },
      {
        id: 3,
        title: "Patterns, Principles, and Practices of Domain-Driven Design 1st Edition by Scott Millett  (Author), Nick Tune (Author)",
        cover: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1118714709&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=milftech-20"
      },
      {
        id: 4,
        title: "Domain-Driven Design Distilled 1st Edition",
        cover: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0134434420&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=milftech-20"
      },
      {
        id: 5,
        title: "Reactive Messaging Patterns with the Actor Model: Applications and Integration in Scala and Akka 1st Edition",
        cover: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0133846830&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=milftech-20"
      }
    ];
    this.refreshBooks(books);

  }

  search = (query) => {

    debugger;
    // fetch(`/search?query=${query}` ).then(
    //   res => res.json().then( this.refreshList )
    // );

  }

  mapBook = book => {
    return <BookLink key={`book-${book.id}`} book={book} />;
  }

  refreshBooks = books => {
    this.setState({
      books: {
        data: books.map(this.mapBook)
      }
    });
  }

  render() {

    const books = this.state.books.data;

    return (
      <div>
          <div className="shelf">
            {books}
          </div>
      </div>
    );
  }
}
