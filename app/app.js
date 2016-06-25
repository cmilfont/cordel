import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Shelf from './shelves/shelf.js';

class Root extends Component {
  render() {
    return (
      <Shelf></Shelf>
    );
  }
}

ReactDOM.render(<Root  />, document.getElementById('app'));
