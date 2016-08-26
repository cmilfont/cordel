import React from 'react';
import { Link } from 'react-router'

export default class BookLink extends React.Component {

  render() {

    const book = this.props.book;

    const style = {
      'background': `url("${book.cover}") center / cover`
    };

    const linkSrc = <Link title={book.title} to={`/books/${book.id}`}>{book.title}</Link>;

    return (
      <div className="mdl-card mdl-shadow--2dp booklink" style={style}>
        <div className="mdl-card__title mdl-card--expand"></div>
        <div className="mdl-card__actions">{linkSrc}</div>
      </div>
    );
  }
}
