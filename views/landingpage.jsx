import React from 'react';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                    <h4>{this.props.user.email}</h4>
                </div>
            </div>
        );
    }
}
