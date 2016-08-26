import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import Root from './root';
import Shelf from './shelves/shelf';
import Book  from './shelves/book'

class App extends Component {
  render() {
    return (

      <Router history={browserHistory}>
          <Route path="/" component={Root}>
              <IndexRedirect to="/shelf" />
              <Route path="shelf" component={Shelf} />
              <Route path="books/:bookId" component={Book} />
          </Route>
      </Router>

    );
  }
}

ReactDOM.render(<App  />, document.getElementById('app'));
