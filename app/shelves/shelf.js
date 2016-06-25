import React from 'react';
import Search from './search.js';

export default class Shelf extends React.Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(query) {
    console.log("Buscou", query);
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
