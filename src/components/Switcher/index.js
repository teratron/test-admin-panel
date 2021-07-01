import React, { /*useRef,*/ useState } from 'react';

import PropTypes from 'prop-types';


/*function useSwitcher(props, ref, ...args) {

    if (args[0] === undefined) {
        args[0] = 0;
    }
    //console.log('i:', args[0]);

    ref[args[0]] = useRef(props[args[0]]);

    args[0]++;

    if (args[0] === ref.length) {
        return ref
    }

    //useSwitcher(props, ref, args[0]);

    //return useSwitcher(props, ref, args[0]);

    /*ref[args[0]] = useSwitcher(useRef(props))

    const state = {
        init: false,
        index: 0,
        refs: []
    }

    console.log('i:', args[0]);

    //return refs//useSwitcher(props)
}*/

function Switcher(props) {
    let prevChild = null;
    const activeName = props.activeName ? props.activeName : 'active';
    const ref = props.data.items.map(() => React.createRef());
    const [switcher] = useState(() => switcherParent());

    //let refs = [1/*switcher.props.children.length*/];
    //refs = useSwitcher(switcher.props.children, refs);
    //console.log('Ref:', refs);
    //const refs = props.data.items.map(() => useSwitcher(switcher.props.children[0]));
    //const Ref = useRef(switcher.props.children[0]);
    //console.log('Ref:', Ref.current, switcher.props.children[0]);
    //const refs = useSwitcher(switcher.props.children);

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
        const child = [];
        props.data.items.forEach((item, index) => {
            child[index] = (
                <React.Fragment key={item.id}>
                    {React.createElement(
                        item.type ? item.type : 'span',
                        {
                            ...getAttrs(item),
                            ref: ref[index],
                            children: item.title,
                            onClick: e => handleClick(e, ref[index])
                        }
                    )}
                </React.Fragment>
            );

            if (item.isActive) {
                //console.log(item)
                prevChild = ref[index];
                //console.log('prev:', prevChild, prevChild.props.children);
            }
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

    function handleClick(e, ref) {
        //console.log(e.target, ref.current)
        //console.log('prev:', prevChild, prevChild.props.children);
        //console.log(typeof prevChild.current)

        if (e.target === prevChild.current) console.log('equal')
    }

    //console.log('1');
    /*    const activeName = props.activeName ? props.activeName : 'active';
        let prev = null;
        const ref = props.items.map(() => React.createRef());
        const [switcher] = useState(() => switcherItems());

        function switcherItems() {
            const child = [];
            //return props.items.map((item, index) => {
            props.items.forEach((item, index) => {
                //return (
                child[index] = <React.Fragment key={item.id}>
                    {React.createElement(
                        item.type,
                        {
                            ...getAttrs(item),
                            ref: ref[index],
                            children: item.title,
                            onClick: handleClick
                        })}
                </React.Fragment>
                //);
                if (item.isActive) {
                    //console.log(item)
                    prev = child[index];
                    console.log('prev:', prev, prev.props.children.props.className, prev.props.children.ref)
                }
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
            console.log(ref[0].current, prev.props.className)
            //ref[0].current.className = ' gogo'

            if (!e.target.className.includes(activeName)) {
                prev.props.className.replace(activeName, 'aaa');
                e.target.classList.add(activeName);//console.log(activeName);
                prev = e.target;
            } else {
                console.log('remove ' + activeName);
            }

            //console.log(e.target.props/!*.children.ref.current.focus()*!/);
            /!*if (init) {
                setInit(false);
            }*!/

            //console.log(e);
            /!*if (state !== e.target) {
                state.className.remove(activeName);
                if (!e.target.className.includes(activeName)) e.target.className.add(activeName);
                setState(e.target);
            }*!/
            //console.log(typeof e.target);
            //console.log(e.target.className);
            //e.target.className += ' active';
            //e.target.classList.remove(activeName);
            //e.target.className += ' gogo'
        }*/

    return <React.Fragment>{switcher}</React.Fragment>
}

/*function useItem() {
    //const ref = useRef(null);

    return {
        ref: useRef(null),
    };
}*/

/*Switcher.defaultProps = {
    items: {}
}*/

Switcher.propTypes = {
    activeName: PropTypes.string
};

export default Switcher;
