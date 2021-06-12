import React from 'react';

import Button from '../Button';
import Table from '../Table';
import './content.scss';

function Support() {
    return (
        <div className="block">
            <Button text="Search" color="secondary" bordered rounded shadowed/>
            <Table/>
        </div>
    );
}

export const titleSupport = 'Support';
export default Support;
