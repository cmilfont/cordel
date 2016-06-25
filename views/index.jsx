import React from 'react';
import DefaultLayout from './default.jsx';
import LandingPage from './landingpage.jsx';
import Unlogged from './unlogged.jsx';

class AppMain extends React.Component {
    render() {
        return (
            <div className="unlogged-card">
                { !this.props.user ? <Unlogged /> : <LandingPage user={this.props.user}  /> }
            </div>
        );
    }
}

export default class Index extends React.Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <AppMain user={this.props.user} />
            </DefaultLayout>
        );
    }
}
