import React from 'react';

export default class BookLink extends React.Component {

  render() {

    const book = this.props.book;

    const style = {
      'background': `url("${book.cover}") center / cover`
    };

    const linkSrc = `/books/${book.id}`;

    return (

      <div className="mdl-card mdl-shadow--2dp booklink" style={style}>
        <div className="mdl-card__title mdl-card--expand"></div>
        <div className="mdl-card__actions">
          <a title={book.title} href={linkSrc}>{book.title}</a>
        </div>
      </div>

    );
  }
}
