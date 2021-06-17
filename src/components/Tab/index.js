import React from 'react';

import './tab.scss';

let reference = null;

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.active = props.activeName ? props.activeName : 'active';
        this.items = props.items; //[{}]
        this.child = props.children; //<a>
        this.state = {isLoggedIn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({isLoggedIn: true});
    }

    //let ch = null/*new Object(props.children)*/;
    //if (React.Children.only(props.children)) ch = React.Children.map(props.children, child => child)[0]
    //console.log(ch)

    render() {
        return (
            <React.Fragment>
                {this.items.map(value => (
                    <React.Fragment key={value.id}>
                        {React.cloneElement(this.child, {
                            children: value.title,
                            url: value.href,
                            onClick: this.handleClick,
                            className: getClassName(this.child.props.className, value.isActive ? this.active : '')
                        })}
                    </React.Fragment>
                ))}
            </React.Fragment>
        )
    }
}

function getClassName(className, activeName) {
    return className ? className + ' ' + activeName : activeName;
}

/*function TabItem(props) {
    return (
        <props.child/>
    );
}*/

/*class TabControl extends React.Component {
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
}*/

export {reference};
export default Tab;
