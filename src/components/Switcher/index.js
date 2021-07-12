import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

let switcherItem = {};

const ret = {
    ref: null,
    item: null,
    prev: {
        ref: null,
        item: null
    }
};

function Switcher(props) {
    //console.log('*+*+**++')
    let prevRef = null;
    const activeName = props.activeName ? props.activeName : 'active';
    const [switcher] = useState(() => switcherParent());
    const [active, setActive] = useState('ddd');

    function switcherParent() {
        if ('type' in props.data) {
            return React.createElement(
                props.data.type ? props.data.type : 'div',
                { ...props.data.attr },
                switcherChild()
            )
        }
        return switcherChild();
    }

    function switcherChild() {
        const ref = [];
        const child = [];
        let hasActive = false;

        props.data.items.forEach((value, index) => {
            ref[index] = React.createRef();
            child[index] = React.createElement(
                value.type
                    ? value.type
                    : 'item' in props.data && 'type' in props.data.item
                        //: props.data.item.type
                        ? props.data.item.type
                        : 'span',
                {
                    ref: ref[index],
                    key: value.id ? value.id : 'id_' + index.toString(),
                    onClick: () => handleClick(ref[index], value),
                    ...getAttr(value, props.data.item.attr)
                },
                value.title ? value.title : 'case_' + index.toString()
            )

            if (value.isActive) {
                prevRef = ref[index];
                hasActive = true;
            }
        });

        if (!hasActive) prevRef = ref[0];

        return child;
    }

    useEffect(() => {
        if (prevRef !== null && !prevRef.current.className.includes(activeName)) {
            prevRef.current.classList.add(activeName);
        }
    }, [prevRef, activeName]);

    function getAttr(item, attr) {
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

    function handleClick(ref, item) {
        if (ref !== prevRef) {
            prevRef.current.classList.remove(activeName);
            ref.current.classList.add(activeName);
            prevRef = ref;

            switcherItem = setActive;
            //switcherItem = Object.assign({}, item);
            //setActive(switcherItem);
            //switcherItem = active;//Object.assign({}, item);
        }
    }

    return <React.Fragment>{switcher}</React.Fragment>
}

function activeItem() {
    console.log('activeItem()');
}

Switcher.propTypes = {
    activeName: PropTypes.string,
    attr: PropTypes.object,
};

export { switcherItem/*, activeItem*/ };
export default Switcher;
