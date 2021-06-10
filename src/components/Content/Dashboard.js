import React from 'react';

import ChartLine from '../Chart/Line';
import Button from '../Button';
import Table from '../Table';
import Card from '../Card';
import './content.scss';

function Dashboard() {
    return (
        <React.StrictMode>
            <DashboardChart/>
            <DashboardReport/>
        </React.StrictMode>
    );
}

function DashboardChart() {
    return (
        <React.Fragment>
            <Button text="Configuring report" color="secondary" rounded shadowed/>
            <Button text="Configuring report" color="primary" bordered rounded/>
            <Button text="Configuring report" color="accent" rounded shadowed blanked/>
            <Button text="Configuring report" color="accent" rounded shadowed/>
            <Card content={ChartLine}/>
            <Card content={Table}/>
            <Card content={Table}/>
        </React.Fragment>
    )
}
//onClick={window.alert("+++++++++")}
function DashboardReport() {
    return (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
    )
}

export const titleDashboard = 'Dashboard';
export default Dashboard;
