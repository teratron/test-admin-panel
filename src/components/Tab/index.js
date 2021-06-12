import React from 'react';

import './tab.scss';

function Tab(props) {
    /*const items = ['Chart', 'Report'];
    //const items = props.items && props.items.length > 0 ? props.items : [];
    for (let value of items) {
        console.log(value);
    }

    let d = items.map((value) => console.log(value))
    console.log('d:', d)*/

    return (
        <nav className="tab">
            <a href="/#content-header" className="tab-item active">Chart</a>
            <a href="/#content-header" className="tab-item">Report</a>
        </nav>
    );
}

class TabControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        if (this.state.isLoggedIn) {
            return //<LogoutButton onClick={this.handleLogoutClick}/>;
        }
         //<LoginButton onClick={this.handleLoginClick}/>;
    }
}

export default Tab;
