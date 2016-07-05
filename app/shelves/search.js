import React from 'react';

export default class Search extends React.Component {

  submit = (event) => {
    this.props.onSubmit(this.inputSearch.value);
    event.preventDefault();
    return false;
  }

  render() {

    return (
      <form autoComplete="off" className="search" onSubmit={this.submit}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label">
          <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input className="mdl-textfield__input" type="text" id="search" ref={(ref) => {this.inputSearch = ref}} />
            <label className="mdl-textfield__label" htmlFor="search">Search</label>
          </div>
        </div>
      </form>
    );
  }
}
