import React, { useRef, useState } from 'react';

//import PropTypes from 'prop-types';

function Switcher(props) {
    console.log('1');
    const activeName = props.activeName ? props.activeName : 'active';
    const tab = [];
    tab[0] = useRef(null);
    //const tab = [...React.createRef()];
    const [switcher] = useState(() => switcherItems());

    //const [init] = useState(true);
    //const switcher = useRef(null);
    /*useEffect(() => {
        switcher.current = switcherItems();
    }, [init, switcherItems]);*/

    function switcherItems() {
        return props.items.map((item, index) => {
            if (item.isActive) {
                console.log(item)
            }
            //tab[index] = React.createRef();
            return (
                <React.Fragment key={item.id}>
                    {console.log('***********************************')}
                    {React.createElement(
                        item.type,
                        Object.assign({
                            onClick: handleClick,
                            children: item.title
                        },
                            getAttrs(item, index)
                        ))}
                </React.Fragment>
            );
        });
    }

    function getAttrs(item, index) {
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
        item.attr.ref = tab[0];
        return item.attr;
    }

    //const [init, setInit] = useState(true);
    //const [state, setState] = useState();

    function handleClick(e) {
        /*if (init) {

            setInit(false);
        }*/
        tab[0].current.className = ' gogo'
        console.log(e);
        /*if (state !== e.target) {
            state.className.remove(activeName);
            if (!e.target.className.includes(activeName)) e.target.className.add(activeName);
            setState(e.target);
        }*/

        //console.log(typeof e.target);
        //console.log(e.target.className);
        //e.target.className += ' active';
        //e.target.classList.remove(activeName);
        //e.target.className += ' gogo'
    }

    return <React.Fragment>{switcher}</React.Fragment>
}

/*Switcher.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.objectOf(PropTypes.element),

    ])
}*/

export default Switcher;
