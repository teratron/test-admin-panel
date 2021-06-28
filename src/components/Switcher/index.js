import React, {useState} from 'react';

import PropTypes from 'prop-types';

function Switcher(props) {
    //console.log('1');
    const activeName = props.activeName ? props.activeName : 'active';
    const [switcher] = useState(() => switcherItems());

    /*useEffect(() => {
        switcher.current = switcherItems();
    }, [init, switcherItems]);*/

    //const a = [...useItem()];

    function switcherItems() {
        const child = [];
        //return props.items.map((item, index) => {
        props.items.forEach((item, index) => {
            /*if (item.isActive) {
                //console.log(item)
            }*/
            //return (
            child[index] = <React.Fragment key={item.id}>

                {React.createElement(
                    item.type,
                    /*{
                        ...getAttrs(item, index),
                        onClick: handleClick,
                        children: item.title
                    }*/
                    Object.assign({
                            //ref: React.createRef(),
                            onClick: handleClick,
                            children: item.title
                        },
                        getAttrs(item, index)
                    ))}
            </React.Fragment>
            // );
        });
        return child
    }

    //const tab = [1];
    //tab[0] = useRef(null);

    //switcher[1].props.children.ref = useRef(null);
    console.log(switcher[1]);

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
        item.attr.ref = React.createRef();
        return item.attr;
    }

    //const [init, setInit] = useState(true);
    //const [state, setState] = useState();

    function handleClick(e) {
        console.log(e/*.target.ref.current.focus()*/);
        /*if (init) {

            setInit(false);
        }*/
        //tab[0].current.className = ' gogo'
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
    const ref = useRef(null);

    return {
        ref,
    };
}*/

Switcher.defaultProps = {
    items: {}
}

Switcher.propTypes = {
    activeName: PropTypes.string
};

export default Switcher;
