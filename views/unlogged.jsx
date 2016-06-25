import React from 'react';
import Menu from './menu.jsx';
import MenuMobile from './menumobile.jsx';
import Footer from './footer.jsx';

export default class Unlogged extends React.Component {
  render() {
    return (

      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Menu />
        <MenuMobile />

        <div className="mdl-layout__content">

          Conteudo deslogado

        </div>
      </div>

    );
  }
}
