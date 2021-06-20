import React from 'react';

//let reference = null;

class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.cases = props.cases; //[{}]
        this.child = props.children; //<a>
        this.activeName = props.activeName ? props.activeName : 'active';
        this.items = [];
        this.state = {
            isLoggedIn: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.getCases();
    }

    handleClick() {
        this.setState({
            isLoggedIn: true,
        });
        //console.log('*********************************************', this.state.title);
    }

    /* componentDidUpdate() {
         console.log('1', 'componentDidUpdate');
     }*/

    getCases() {
        //return (
        //<React.Fragment>
        this.cases.forEach((value, index) => (
            <React.Fragment key={value.id}>
                {this.items[index] = React.cloneElement(this.child, {
                    children: value.title,
                    href: value.url ? value.url : '',
                    onClick: this.handleClick,
                    className: getClassName(this.child.props.className, value.isActive ? this.activeName : '')
                })}
            </React.Fragment>
        ));
        //</React.Fragment>
        //);
        //console.log('1', this.items[0]);
    }

    //let ch = null/*new Object(props.children)*/;
    //if (React.Children.only(props.children)) ch = React.Children.map(props.children, child => child)[0]
    //console.log(ch)


    render() {
        //if (!this.state.isInit) {
        /*this.getCases();
        this.setState({isInit: true});
        console.log(this.items);*/
        //}
        //console.log('2', this.items[0]);
        return (
            <React.Fragment>
                {this.items}
            </React.Fragment>
        );
    }
}


function getClassName(className, activeName) {
    return className ? className + ' ' + activeName : activeName;
}

/*function Switch(props) {
    const item = getCasesSwitch(props);

    console.log(item);

    return (
        <React.Fragment>
            {item}
        </React.Fragment>
    );
}*/

/*function getCasesSwitch(props) {
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
}*/


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
//export {reference};
export default Switcher;
