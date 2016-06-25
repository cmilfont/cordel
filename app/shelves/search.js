import React from 'react';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    this.props.onSubmit(this.inputSearch.value);
    event.preventDefault();
    return false;
  }

  render() {

    return (
      <form onSubmit={this.submit}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
          <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input className="mdl-textfield__input" type="text" id="sample6" ref={(ref) => {this.inputSearch = ref}} />
            <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
          </div>
        </div>
      </form>
    );
  }
}
