import React from 'react';

import ChartLine from '../Chart/Line';
import Button from '../Button';
import Table from '../Table';
import Card from '../Card';
import './content.scss';

function Dashboard() {
    return (
        <React.Fragment>
            <DashboardChart/>
            <DashboardReport/>
        </React.Fragment>
    );
}

function DashboardChart() {
    return (
        <React.Fragment>
            <div className="navbar">
                <div>
                    <Button text="Configuring report" color="secondary" rounded shadowed/>
                </div>
                <div>
                    <Button text="Configuring report" color="secondary" rounded shadowed/>
                </div>
            </div>
            <Card className="" style={{width: '30%'}}>
                <p><strong>Installations on active devices</strong></p>
                <div className="bar" style={{alignItems: 'baseline'}}>
                    <output style={{fontSize: '5.5rem', lineHeight: 1}}>5,489</output>
                    <span>+3.79% vs previous 30 days</span>
                </div>
            </Card>
            <Card content={<ChartLine/>}/>
            <Card content={<Table/>}/>
        </React.Fragment>
    );
}

function DashboardReport() {
    return (
        <Card>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit
                anim id est laborum.</p>
        </Card>
    );
}

export const titleDashboard = 'Dashboard';
export default Dashboard;
