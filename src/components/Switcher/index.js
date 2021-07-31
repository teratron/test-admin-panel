import React, {useEffect, useState} from 'react';

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
    let prevRef = null;
    const data = props.data;
    const activeName = data.activeName ? data.activeName : 'active';
    const [switcher] = useState(switcherParent());
    //const switcher = switcherParent();
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
                {...data.attr},
                switcherChild())
            : switcherChild();
    }

    function switcherChild() {
        let hasActive = false;
        const ref = [];
        const child = [];
        const attr = data.item && data.item.attr ? data.item.attr : null;

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
            )

            if (item.isActive) {
                prevRef = ref[index];
                hasActive = true;
            }
        });

        if (!hasActive) prevRef = ref[0];

        return child;
    }

    useEffect(() => {
        if (prevRef !== null && /*prevRef.current.className &&*/ !prevRef.current.className.includes(activeName)) {
            prevRef.current.classList.add(activeName);
        }
    }, [prevRef, activeName]);

    function getAttr(attr, item) {
        if (attr !== null && item.attr) {
            Object.keys(attr).forEach(key => {
                switch (key) {
                    case 'className':
                        if (attr.className !== '' && 'className' in item.attr && item.attr.className !== '') {
                            let a = attr.className
                                .trim()
                                .split(/\s+/);

                            item.attr.className = a.concat(
                                item.attr.className
                                    .trim()
                                    .split(/\s+/)
                                    .filter(value => !a.includes(value)))
                                .join(' ');
                        }
                        break;
                    case 'style':
                        item.attr[key] = Object.assign({}, attr[key], item.attr[key]);
                        break;
                    default:
                        if (attr[key] && !item.attr[key]) item.attr[key] = attr[key];
                        break;
                }
            });
        }

        if (item.isActive) {
            if (item.attr.className === undefined) item.attr.className = activeName;
            else if (!item.attr.className.includes(activeName)) item.attr.className += ' ' + activeName;
        }

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

Switcher.propTypes = {
    activeName: PropTypes.string,
    attr: PropTypes.object,
};

export {switcherItem/*, activeItem*/};
export default Switcher;
