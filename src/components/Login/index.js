import React from 'react';

import Button from "../Button";

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
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </>
        );
    }
}

function Greeting(props) {
    if (props.isLoggedIn) return <UserGreeting/>;
    return <GuestGreeting/>;
}

function LoginButton(props) {
    return <Button text='Login' type='submit' onClick={props.onClick}/>;
}

function LogoutButton(props) {
    return <Button text='Logout' type='submit' onClick={props.onClick}/>;
}

function UserGreeting() {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
    return <h1>Please sign up.</h1>;
}

export default LoginControl