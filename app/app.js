import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Shelf from './shelves/shelf.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import cordelTheme from './themes/cordel.js';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Root extends Component {
  render() {

    const muiTheme = getMuiTheme(cordelTheme);

    const book = {
  'slug': 'construindo-produto-reativo',
  title: "Construindo um Produto Reativo",
  description: "",
  contents: `
  ## O que é
Construiremos uma aplicação desde a concepção do negócio, passando pela construção da marca, utilizando metodologia ágil e boas práticas de engenharia de software em 1 dia.

Do Setup ao Deploy!

Usando Nodejs, ElasticSearch, Amazon S3, Heroku, ExpressJS, ES6/7, Ecossistema React, Material Design, PostCSS e café.

## Como Funciona
Um mentor (ou mais) acompanha como Product Owner, Coach e Engenheiro, guiando o desenvolvimento em todas as etapas, mas todos os participantes codificam e atuam em todos os papéis.

O produto construído é disponibilizado em github privado aos participantes e acompanhando após o evento pela Produto Reativo.

## Motivação
Esse modelo surgiu em Brainstorms com alunos que sentiram a necessidade de aperfeiçoar os conhecimentos aprendidos nos cursos em um projeto real dado que a maioria não tem disponibilidade de aplicar de imediato no projeto que trabalham.

## Informações
Por enquanto esse modelo é exclusivo para alunos da Produto Reativo.


Próxima turma: 18/06/2016
[Inscrição](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7Q337RDG9QANJ)

Se deseja levar esse modelo pra sua empresa, participar de uma turma ou demais informações, entre em contato no email: [cmilfont@milfont.org](mail:cmilfont@milfont.org)
  `
};

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Shelf contents={book.contents} />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Root  />, document.getElementById('app'));
