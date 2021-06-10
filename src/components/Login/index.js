import React from 'react';

import Button from '../Button';

class LoginControl extends React.Component {
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
            return <LogoutButton onClick={this.handleLogoutClick}/>;
        }
        return <LoginButton onClick={this.handleLoginClick}/>;
    }
}

function LoginButton(props) {
    return <Button text="Login" type="submit" onClick={props.onClick} rounded/>;
}

function LogoutButton(props) {
    return <Button text="Logout" type="submit" onClick={props.onClick} rounded/>;
}

export default LoginControl
