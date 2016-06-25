import React from 'react';

export default class Highlight extends React.Component {

  render() {

    return (
      <div>
        {this.props.source.description}
      </div>
    );
  }
}
