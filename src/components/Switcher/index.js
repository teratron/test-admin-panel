import React from 'react';

import './tab.scss';

let reference = null;

/*class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.cases = props.cases; //[{}]
        this.child = props.children; //<a>
        this.activeName = props.activeName ? props.activeName : 'active';
        this.state = {
            isLoggedIn: false,
            title: 'a'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isLoggedIn: true,
            title: 'b'
        });
        //console.log('*********************************************', this.state.title);
    }

    //let ch = null/!*new Object(props.children)*!/;
    //if (React.Children.only(props.children)) ch = React.Children.map(props.children, child => child)[0]
    //console.log(ch)
    item = [];

    render() {
        //console.log(this);
        return (
            <React.Fragment>
                {this.cases.map((value, index)  => (
                    <React.Fragment key={value.id}>
                        {this.item[index] = React.cloneElement(this.child, {
                            children: value.title,
                            href: value.url ? value.url : '',
                            onClick: this.handleClick,
                            className: getClassName(this.child.props.className, value.isActive ? this.activeName : '')
                        })}
                        {console.log(this.item[index])}
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    }
}*/

function Switch(props) {
    //const activeName = props.activeName ? props.activeName : 'active';
    //let item = [];

    /*function handleClick() {
        console.log('*********************************************');
    }*/

    const item = getCasesSwitch(props);

    console.log(item);

    return (
        <React.Fragment>
            {item}
            {/*{props.cases.map((value, index) => (
                <React.Fragment key={value.id}>
                    {item[index] = React.cloneElement(props.children, {
                        children: value.title,
                        href: value.url ? value.url : '',
                        onClick: handleClick,
                        className: getClassName(props.children.props.className, value.isActive ? activeName : '')
                    })}
                    {console.log(item[index])}
                </React.Fragment>
            ))}*/}
        </React.Fragment>
    );
}

function getCasesSwitch(props) {
    const activeName = props.activeName ? props.activeName : 'active';
    const item = [];
    //console.log(props.cases)
    props.cases.forEach((value, index) => (
        <React.Fragment key={value.id}>
            {item[index] = React.cloneElement(props.children, {
                children: value.title,
                href: value.url ? value.url : '',
                //onClick: handleClick,
                className: getClassName(props.children.props.className, value.isActive ? activeName : '')
            })}
        </React.Fragment>
    ))
    //console.log(props.cases)
    return item;
}

function getClassName(className, activeName) {
    return className ? className + ' ' + activeName : activeName;
}

/*class SwitchControl extends React.Component {
    constructor(props) {
        super(props);
        this.items = props.items; //[{}]
        this.child = props.children; //<a>
        this.state = {
            isLoggedIn: false,
            title: 'a'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            isLoggedIn: true,
            title: 'b'
        });
        console.log('*********************************************', this.state.title);
    }

    render() {
        console.log(this);
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
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
//console.log(<Switch/>)
export {reference};
export default Switch;
