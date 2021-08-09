import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

let switcherItem = {};

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
    let prevRef/* = null*/;
    const data = !props.data || (props.data && !props.data.items) ? { items: [{}] } : props.data;
    const activeName = data.activeName ? data.activeName : 'active';
    const disableName = data.disableName ? data.disableName : 'disabled';
    const [switcher] = useState(switcherParent());
    const [active, setActive] = useState({
        ref: null,
        item: null,
        prev: {
            ref: null,
            item: null
        }
    });

    function switcherParent() {
        return data.type
            ? React.createElement(
                data.type ? data.type : 'div',
                { ...data.attr },
                switcherChild())
            : switcherChild();
    }

    function switcherChild() {
        let hasActive = false;
        const ref = [];
        const child = [];
        const attr = data.item && data.item.attr ? data.item.attr : null; // TODO:

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
                    ...getAttr(attr, item)
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

    useEffect(() => {
        //console.log(prevRef);
        if (/*prevRef !== null && */prevRef.current !== null && !prevRef.current.className.includes(activeName)) {
            //console.log(prevRef);
            prevRef.current.classList.add(activeName);
        }
    }, [prevRef, activeName]);

    function getAttr(attr, item) {
        if (attr !== null /*&& item.attr*/) {
            Object.keys(attr).forEach(key => {
                switch (key) {
                    case 'className':
                        if (attr.className !== '' && item.attr?.className) {
                            if (/*item.attr?.className &&*/ item.attr.className !== '') {
                                let a = attr.className
                                    .trim()
                                    .split(/\s+/);

                                item.attr.className = a.concat(
                                    item.attr.className
                                        .trim()
                                        .split(/\s+/)
                                        .filter(value => !a.includes(value)))
                                    .join(' ');
                            } else {
                                item.attr.className = attr.className;
                            }
                        }
                        break;
                    case 'style':
                        item.attr.style = Object.assign({}, attr.style, item.attr.style);
                        break;
                    default:
                        console.log(item?.attr, item.attr?.[key], key);
                        //if (attr[key]) {
                        /*if (!item.attr || (item.attr && !item.attr[key])) {
                            console.log(item.attr, item.attr[key], key);
                            //item.attr.prototype[key] = attr[key];
                            item.attr[key] = attr[key];
                        }*/
                        //}
                        break;
                }
            });
        }

        const addClassName = function (is, name) {
            if (item[is]) {
                if (!item.attr.className/* === undefined*/) item.attr.className = name;
                else if (!item.attr.className.includes(name)) item.attr.className += ' ' + name;
            }
        }
        addClassName('isActive', activeName);
        addClassName('isDisable', disableName);

        /*if (item.isActive) {
            if (item.attr.className === undefined) item.attr.className = activeName;
            else if (!item.attr.className.includes(activeName)) item.attr.className += ' ' + activeName;
        }

        if (item.isDisable) {
            if (item.attr.className === undefined) item.attr.className = disableName;
            else if (!item.attr.className.includes(disableName)) item.attr.className += ' ' + disableName;
        }*/

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

Switcher.propTypes = {// TODO:
    activeName: PropTypes.string,
    disableName: PropTypes.string,
    isActive: PropTypes.bool,
    isDisable: PropTypes.bool,
    attr: PropTypes.object,
};

export { switcherItem/*, activeItem*/ };
export default Switcher;
