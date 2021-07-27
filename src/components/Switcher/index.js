import React, {useEffect, useState} from 'react';

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
    const data = props.data;
    const activeName = data.activeName ? data.activeName : 'active';
    const [switcher] = useState(() => switcherParent());
    const [active, setActive] = useState({
        ref: null,
        item: null,
        prev: {
            ref: null,
            item: null
        }
    });

    function switcherParent() {
        if ('type' in data) {
            return React.createElement(
                data.type ? data.type : 'div',
                {...data.attr},
                switcherChild()
            )
        }
        return switcherChild();
    }

    function switcherChild() {
        const attr = data.item.attr ? data.item.attr : {};
        const ref = [];
        const child = [];
        let hasActive = false;

        data.items.forEach((value, index) => {
            //attr = ;
            ref[index] = React.createRef();
            child[index] = React.createElement(
                value.type
                    ? value.type
                    : 'item' in data && 'type' in data.item //: data.item.type
                    ? data.item.type
                    : 'span',
                {
                    ref: ref[index],
                    key: value.id ? value.id : 'id_' + index.toString(),
                    onClick: () => handleClick(ref[index], value),
                    ...getAttr(value, attr)
                },
                value.title ? value.title : 'item_' + index.toString()
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
        if ('attr' in item) {

        } else if ('className' in attr) {
            return
        }


        const active = item.isActive /*&& !item.attr.className.includes(activeName)*/
            ? activeName
            : '';
        //if ('className' in item.attr) {
        item.attr.className = item.attr.className
            ? active
                ? item.attr.className + ' ' + active
                : item.attr.className
            : active;
        //}
        return item.attr;
    }

    /*function setActive(item) {
        const active = item.isActive && !item.attr.className.includes(activeName)
            ? activeName
            : '';
        //if ('className' in item.attr) {
            item.attr.className = item.attr.className
                ? active
                    ? item.attr.className + ' ' + active
                    : item.attr.className
                : active;
        //}
        return item.attr;
    }*/

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
