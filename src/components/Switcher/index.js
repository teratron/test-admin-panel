import React, {useState} from 'react';

import PropTypes from 'prop-types';

function Switcher(props) {
    //console.log('1');
    const activeName = props.activeName ? props.activeName : 'active';

    const ref = props.items.map(() => React.createRef());

    const [switcher] = useState(() => switcherItems());

    /*useEffect(() => {
        switcher.current = switcherItems();
    }, [init, switcherItems]);*/

    //const a = [...useItem()];

    function switcherItems() {
        const child = [];
        //return props.items.map((item, index) => {
        props.items.forEach((item, index) => {
            if (item.isActive) {
                //console.log(item)
            }
            //return (
            child[index] = <React.Fragment key={item.id}>
                {React.createElement(
                    item.type,
                    {
                        ...getAttrs(item),
                        children: item.title,
                        ref: ref[index],
                        onClick: handleClick
                    })}
            </React.Fragment>
            //);
        });
        return child
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
    //const [state, setState] = useState();

    function handleClick(e) {
//ref[0].current.className = ' gogo'
        if (!e.target.className.includes(activeName)) e.target.className.add(activeName);//console.log(activeName);
        else console.log('remove ' + activeName);
        //console.log(e.target.props/*.children.ref.current.focus()*/);
        /*if (init) {
            setInit(false);
        }*/

        //console.log(e);
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

/*function useItem() {
    //const ref = useRef(null);

    return {
        ref: useRef(null),
    };
}*/

Switcher.defaultProps = {
    items: {}
}

Switcher.propTypes = {
    activeName: PropTypes.string
};

export default Switcher;
