import React from 'react';

export default class MenuMobile extends React.Component {

  render() {
    return (

      <div className="android-drawer mdl-layout__drawer mdl-layout--small-screen-only">
        <span className="mdl-layout-title">
          <div className="pr-produtoreativo-logo" data-icon="p"></div> Cordel
        </span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="/login">Login</a>
          <a className="mdl-navigation__link" href="/register">Register</a>
        </nav>
      </div>

    );
  }

}
