import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import cordelTheme from './themes/cordel.js';
import Search from './shelves/search';

injectTapEventPlugin();

export default class Root extends React.Component {

  render() {

    const muiTheme = getMuiTheme(cordelTheme);

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Search onSubmit={this.search} />
          <FlatButton
            linkButton={true}
            href="/logout"
            secondary={true}
            className="logout"
            style={{ "margin" : "auto" }}
            icon={<FontIcon className="fa fa-sign-out" />}
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
