/*

```jsx
    <Switcher data={data} />
```

    const data = {
        type: 'nav',
        activeName: 'active',
        attr: {
            id: 'dashboard-tab',
            className: 'tab'
        },
        item: {
            type: 'a',
            attr: {
                className: 'tab-item'
            },
        },
        items: [
            {
                id: 'tab_chart_id',
                type: 'a',
                title: 'Chart',
                attr: {
                    href: '/#content-header',
                    className: 'tab-item'
                },
                isActive: true
            },
            {
                id: 'tab_report_id',
                type: 'a',
                title: 'Report',
                attr: {
                    href: '/#content-header',
                    className: 'tab-item'
                },
                isDisable: true
            }
        ]
    };

*/

import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

let switcherItem = {};

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

        props.data.items.forEach((item, index) => {
            ref[index] = React.createRef();
            child[index] = React.createElement(
                item.type ? item.type : 'span',
                {
                    key: item.id ? item.id : 'id_' + index.toString(),
                    ref: ref[index],
                    onClick: () => handleClick(ref[index], item),
                    ...getAttr(item)
                },
                item.title ? item.title : 'case_' + index.toString()
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
        if (prevRef !== null && !prevRef.current.className.includes(activeName)) {
            prevRef.current.classList.add(activeName);
        }
    }, [prevRef, activeName]);

    function getAttr(item) {
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
