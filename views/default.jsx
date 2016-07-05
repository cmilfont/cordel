import React from 'react';

export default class DefaultLayout extends React.Component {
    render() {
        return (
            <html>

            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content="aprenda. desaprenda. reaprenda" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{this.props.title}</title>

                <meta name="mobile-web-app-capable" content="yes" />

                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta name="apple-mobile-web-app-title" content="Produto Reativo" />

                <meta name="msapplication-TileColor" content="#3372DF" />

                <link rel="shortcut icon" type="image/png" href="/assets/images/produtoreativo.ico"/>

                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.blue-yellow.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />

                <link rel="stylesheet" href="/assets/css/main.css" />

            </head>

            <body>
                {this.props.children}
                <script defer src="https://code.getmdl.io/1.1.2/material.min.js"></script>
            </body>
            </html>
        );
    }
}
