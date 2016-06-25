import React from 'react';
import Search from './search.js';

export default class Shelf extends React.Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(query) {

    fetch(`/search?query=${query}` ).then(
      res => res.json().then( function(list){ console.log("Achou", list); } )
    );

  }

  render() {

    const Books = [];

    return (
      <div>
        <Search onSubmit={this.search} />
        {Books}
      </div>
    );
  }
}
