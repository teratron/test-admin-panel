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
            <header id="content-header" className="content-header">
                <h1 className="title">Dashboard</h1>
                <Tab/>
            </header>
            <DashboardChart/>
            <DashboardReport/>
        </>
    );
}

function DashboardChart() {
    return (
        <>
            <Button text="CONFIGURING REPORT" color="secondary" rounded shadowed/>
            <Button text="CONFIGURING REPORT" color="primary" bordered rounded/>
            <Button text="CONFIGURING REPORT" color="accent" rounded shadowed/>
            <Card content={ChartLine}/>
            <Card content={<Table bordered striped/>}/>
        </>
    )
}

function DashboardReport() {
    return (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
    )
}

export default Dashboard;
