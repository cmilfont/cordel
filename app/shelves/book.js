import React, { Component } from 'react';

export default class Book extends Component {

  state = { bookId: '' }

  componentDidMount() {
    this.setState({
      bookId: this.props.params.bookId
    });
  }

  render() {
    return (

      <div className="book">
        {this.state.bookId}
      </div>

    );
  }
}
