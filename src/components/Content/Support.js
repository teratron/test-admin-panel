import React from 'react';

import Button from '../Button';
import Table from '../Table';
import Card from '../Card';
import './content.scss';

function Support() {
    return (
        <React.Fragment>
            {/*<header id="content-header" className="content-header">
                <h1 className="title">Support</h1>
            </header>*/}
            <Card content={Table}/>
            <Button text="CONFIGURING REPORT" color="secondary" bordered rounded shadowed/>
        </React.Fragment>
    );
}

export const titleSupport = 'Support';
export default Support;