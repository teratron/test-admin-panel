import React from 'react';

import Navbar from '../Navbar';
import ChartLine from '../Chart/Line';
import Button from '../Button';
import Table from '../Table';
import Card from '../Card';

function Dashboard() {
    return (
        <>
            <Navbar color="secondary"/>
            <Card content={ChartLine}/>
            <Card content={<Table bordered striped/>}/>
            <Button text="CONFIGURING REPORT" color="secondary" bordered rounded shadowed/>
        </>
    );
}

export default Dashboard;