import React from 'react';

import Button from '../Button';
import Table from '../Table';
import Card from '../Card';

function Support() {
    return (
        <>
            <Card content={<Table bordered striped/>}/>
            <Button text="CONFIGURING REPORT" color="secondary" bordered rounded shadowed/>
        </>
    );
}

export default Support;