import React from 'react';

export default class Menu extends React.Component {

  render() {
    return (
      <div className="android-header mdl-layout__header mdl-layout__header--waterfall">
        <div className="mdl-layout__header-row">
          <span className="android-title mdl-layout-title">
            <div className="pr-produtoreativo-logo" data-icon="p"></div> Cordel
          </span>

          <div className="android-header-spacer mdl-layout-spacer"></div>

          <div className="android-navigation-container mdl-layout--large-screen-only">
            <nav className="android-navigation mdl-navigation">
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="/login">Login</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="/register">Register</a>
            </nav>
          </div>
        </div>
      </div>
    );
  }

}
