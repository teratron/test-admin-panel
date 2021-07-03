import React, {useState} from 'react';

import PropTypes from 'prop-types';

function Switcher(props) {
    let prevChild;
    const activeName = props.activeName ? props.activeName : 'active';
    const [switcher] = useState(() => switcherParent());

    //console.log(switcher)

    //const [init, setInit] = useState(true);
    //const [state, setState] = useState();

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
                            children: item.title,
                            onClick: () => handleClick(ref[index])
                        }
                    )}
                </React.Fragment>
            );

            if (item.isActive) {
                prevChild = ref[index];
                hasActive = true;
            }
        });

        //console.log(child[0].props.children.props, ref[0]);
        if (!hasActive) {
            //ref[0].current.classList.add(activeName);
            prevChild = ref[0];
            //setActive(child[0]);
            //child[0].props.children.props.className = activeName;
        }

        return child;
    }

    /*function setActive(props) {
        console.log(props.props.children.props.className)
        props.props.children.props.className = activeName;
    }*/

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

    /*useEffect(() => {

    }, []);
    */

    function handleClick(ref) {
        if (ref !== prevChild/*&& !ref.current.className.includes(activeName)*/) {
            ref.current.classList.add(activeName);
            prevChild.current.classList.remove(activeName);
            prevChild = ref;
        }
    }

    return <React.Fragment>{switcher}</React.Fragment>
}

/*Switcher.defaultProps = {
    items: {}
}*/

Switcher.propTypes = {
    activeName: PropTypes.string,
    attr: PropTypes.object,
};

export default Switcher;
