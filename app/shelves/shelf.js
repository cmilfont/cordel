import React from 'react';
import Search from './search.js';
import Highlight from './highlight.js';

export default class Shelf extends React.Component {

  state = { highlights: { data:[] } };

  search = (query) => {

    fetch(`/search?query=${query}` ).then(
      res => res.json().then( this.refreshList )
    );

  }

  mapHighlight = hit => {
    return <Highlight id={`high-${hit._id}`} source={hit._source} />;
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

    return (
      <div>
        <Search onSubmit={this.search} />
        {highlights}
      </div>
    );
  }
}
