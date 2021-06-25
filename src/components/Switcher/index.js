import React, { useState } from 'react';

//import PropTypes from 'prop-types';

function Switcher(props) {
    console.log('1');
    const activeName = props.activeName ? props.activeName : 'active';

    /*let items = null;
    useEffect(() => {
            items = switcherItems();
        }, []
    );*/
    const [switcher] = useState(() => switcherItems());

    function switcherItems() {
        return props.items.map(item => {
            if (item.isActive) { console.log(3333) }
            return <React.Fragment key={item.id}>
                {console.log('***********************************')}
                {React.createElement(
                    item.type,
                    Object.assign({
                        onClick: handleClick,
                        children: item.title
                    },
                        getAttrs(item)
                    ))}
            </React.Fragment>
        });
    }

    function getAttrs(item) {
        if ('className' in item.attr) {
            const active = item.isActive && !item.attr.className.includes(activeName)
                ? activeName
                : '';
            item.attr.className = item.attr.className
                ? active
                    ? item.attr.className + ' ' + active
                    : item.attr.className
                : active;
        }
        return item.attr;
    }

    //const [init, setInit] = useState(true);
    const [state, setState] = useState();

    function handleClick(e) {
        /*if (init) {

            setInit(false);
        }*/

        console.log(e.target, state);
        if (state !== e.target) {
            state.className.remove(activeName);
            if (!e.target.className.includes(activeName)) e.target.className.add(activeName);
            setState(e.target);
        }

        //console.log(typeof e.target);
        //console.log(e.target.className);
        //e.target.className += ' active';
        //e.target.classList.remove(activeName);
        //e.target.className += ' gogo'
    }

    return <React.Fragment>{switcher}</React.Fragment>
}

/*function getAttrs(item, activeName) {
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
}*/

/*Switcher.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.objectOf(PropTypes.element),

    ])
}*/

export default Switcher;
