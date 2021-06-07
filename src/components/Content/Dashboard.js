import React from 'react';

import Tab from '../Tab';
import ChartLine from '../Chart/Line';
import Button from '../Button';
import Table from '../Table';
import Card from '../Card';
import './content.scss';

function Dashboard() {
    return (
        <>
            <header className="content-header">
                <h1 className="title">Dashboard</h1>
                <Tab/>
            </header>
            <Card content={ChartLine}/>
            <Card content={<Table bordered striped/>}/>
            <Button text="CONFIGURING REPORT" color="secondary" bordered rounded shadowed/>
        </>
    );
}

export default Dashboard;
