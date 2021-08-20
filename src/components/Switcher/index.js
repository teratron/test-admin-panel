import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';

let switcherItem = {}; // TODO:
/*const ret = {
    ref: null,
    item: null,
    prev: {
        ref: null,
        item: null
    }
};*/

function Switcher(props) {
    //console.log('*+*+**++')
    let prevRef = null;
    const data = !props.data || (props.data && !props.data.items) ? {items: [{}]} : props.data;
    const activeName = data.activeName ? data.activeName : 'active';
    const disableName = data.disableName ? data.disableName : 'disabled';
    const [switcher] = useState(switcherParent());
    const [active, setActive] = useState({ // TODO:
        ref: null,
        item: null,
        prev: {
            ref: null,
            item: null
        }
    });

    useEffect(() => {
        if (prevRef.current !== null && !prevRef.current.className.includes(activeName)) {
            prevRef.current.classList.add(activeName);
        }
    }, [prevRef, activeName]);

    function switcherParent() {
        return data.type
            ? React.createElement(
                data.type ? data.type : 'div',
                {...data.attr},
                switcherChild())
            : switcherChild();
    }

    function switcherChild() {
        let hasActive;
        const ref = [];
        const child = [];
        const items = data?.item?.attr
            ? {
                attr: data.item.attr,
                arr: data.item.attr?.className
                    ? data.item.attr.className.trim().split(/\s+/)
                    : null
            }
            : null;

        data.items.forEach((item, index) => {
            ref[index] = React.createRef();
            child[index] = React.createElement(
                item.type
                    ? item.type
                    : data.item && data.item.type ? data.item.type : 'span',
                {
                    ref: ref[index],
                    key: item.id ? item.id : 'id_' + index.toString(),
                    onClick: () => handleClick(ref[index], item),
                    ...getAttr(items, item)
                },
                item.title ? item.title : 'item_' + index.toString()
            );

            if (item.isActive) {
                prevRef = ref[index];
                hasActive = true;
            }
        });

        if (!hasActive) prevRef = ref[0];

        return child;
    }

    function getAttr(items, item) {
        if (items !== null) {
            Object.keys(items.attr).forEach(key => {
                switch (key) {
                    case 'className':
                        if (items.attr.className !== '') {
                            if (item?.attr?.className && item.attr.className !== '') {
                                item.attr.className = items.arr.concat(
                                    item.attr.className
                                        .trim()
                                        .split(/\s+/)
                                        .filter(value => !items.arr.includes(value)))
                                    .join(' ');
                                break;
                            }
                            item.attr.className = items.attr.className;
                        }
                        break;
                    case 'style':
                        item.attr.style = Object.assign({}, items.attr.style, item?.attr?.style);
                        break;
                    default:
                        if (item?.attr?.[key]) break;
                        if (!item.attr) {
                            Object.defineProperty(item, 'attr', {
                                value: {},
                                writable: true
                            });
                        }
                        item.attr[key] = items.attr[key];
                        break;
                }
            });
        }

        const addClassName = function (is, name) {
            if (item[is]) {
                if (!item.attr.className) item.attr.className = name;
                else if (!item.attr.className.includes(name)) item.attr.className += ' ' + name;
            }
        }
        addClassName('isActive', activeName);
        addClassName('isDisable', disableName);

        return item.attr;
    }

    function handleClick(ref, item) {
        setActive({
            ref: ref,
            item: item,
            prev: {
                ref: null,
                item: null
            }
        });

        if (ref !== prevRef) {
            prevRef.current.classList.remove(activeName);
            ref.current.classList.add(activeName);
            prevRef = ref;

            // TODO:
            switcherItem = active//setActive();

            //switcherItem = Object.assign({}, item);
            //setActive(switcherItem);
            //switcherItem = active;//Object.assign({}, item);

            if ('func' in item) item.func()//console.log(item.func());
        }
    }

    return <React.Fragment>{switcher}</React.Fragment>
}

/*function activeItem() {
    console.log('activeItem()');
}*/

Switcher.propTypes = { // TODO:
    activeName: PropTypes.string,
    disableName: PropTypes.string,
    isActive: PropTypes.bool,
    isDisable: PropTypes.bool,
    attr: PropTypes.object,
};

export {switcherItem/*, activeItem*/};
export default Switcher;
