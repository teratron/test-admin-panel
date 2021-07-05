import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

/*export*/ let switcherItem = {};

function Switcher(props) {
    console.log('*+*+**++')
    let prevRef = null;
    const activeName = props.activeName ? props.activeName : 'active';
    const [switcher] = useState(() => switcherParent());
    const [active, setActive] = useState({});

    function switcherParent() {
        if ('type' in props.data) {
            return React.createElement(
                props.data.type ? props.data.type : 'div',
                {
                    ...props.data.attr,
                    children: switcherChild()
                }
            )
        }
        return switcherChild();
    }

    function switcherChild() {
        const ref = [];
        const child = [];
        let hasActive = false;

        props.data.items.forEach((item, index) => {
            ref[index] = React.createRef();
            child[index] = (
                <React.Fragment key={item.id ? item.id : 'id_' + index.toString()}>
                    {React.createElement(
                        item.type ? item.type : 'span',
                        {
                            ...getAttrs(item),
                            ref: ref[index],
                            //children: item.title,
                            onClick: () => handleClick(ref[index], item)
                        },
                        item.title
                    )}
                </React.Fragment>
            );

            if (item.isActive) {
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

    function handleClick(ref, item) {
        if (ref !== prevRef) {
            prevRef.current.classList.remove(activeName);
            ref.current.classList.add(activeName);
            prevRef = ref;

            switcherItem = Object.assign({}, item);
            setActive(switcherItem);
            //switcherItem = active;//Object.assign({}, item);
        }
    }

    return <React.Fragment>{switcher}</React.Fragment>
}

function activeItem() {

}

Switcher.propTypes = {
    activeName: PropTypes.string,
    attr: PropTypes.object,
};

export { switcherItem, activeItem };
export default Switcher;
