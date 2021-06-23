import React from 'react';

//import PropTypes from 'prop-types';

function Switcher(props) {
    console.log('1');
    const activeName = props.activeName ? props.activeName : 'active';
    //const [state, setState] = useState({init: false});
    //setState({init: false});

    //const child = props.items;

    /*const items = React.memo(() => {
        props.items.map(item => (
            <React.Fragment key={item.id}>
                {console.log('***********************************')}
                {React.createElement(
                    item.type,
                    Object.assign({
                            onClick: handleClick,
                            children: item.title
                        },
                        getAttrs(item, activeName)
                    ))}
            </React.Fragment>
        ));
    });*/

    let items;
    //if (!state.init) {
    items = props.items.map(item => (
        <React.Fragment key={item.id}>
            {console.log('***********************************')}
            {React.createElement(
                item.type,
                Object.assign({
                        onClick: handleClick,
                        children: item.title
                    },
                    getAttrs(item, activeName)
                ))}
        </React.Fragment>
    ));
    //setState({init: true});
    //}
    //const [switcher/*, setSwitcher*/] = useState(items);

    //console.log('items', typeof switcher);
    function handleClick(e) {
        //console.log(typeof e.target);
        //console.log(e.target.className);
        //e.target.className += ' active';
        e.target.classList.remove(activeName);
        //e.target.className += ' gogo'
    }

    //return <React.Fragment>{switcher}</React.Fragment>
    return <React.Fragment>{items}</React.Fragment>
}

function getAttrs(item, activeName) {
    if ('className' in item.attr) {
        activeName = item.isActive && !item.attr.className.includes(activeName)
            ? activeName
            : '';
        item.attr.className = item.attr.className
            ? activeName
                ? item.attr.className + ' ' + activeName
                : item.attr.className
            : activeName;
    }
    return item.attr;
}

/*Switcher.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.objectOf(PropTypes.element),

    ])
}*/

export default Switcher;
