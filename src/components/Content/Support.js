import React from 'react';

import ContentHeader from "./Header";
import Button from '../Button';
import Table from '../Table';

export const titleSupport = 'Support';

function Support() {
    return (
        <React.Fragment>
            <ContentHeader title={titleSupport}/>
            <div className="pane">
                <Button text="Search" color="secondary" bordered rounded shadowed/>
                <Table/>
            </div>
        </React.Fragment>
    );
}

export default Support;
