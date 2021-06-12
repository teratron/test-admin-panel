import React from 'react';

import ChartLine from '../Chart/Line';
import Button from '../Button';
import Table from '../Table';
import Card from '../Card';
import './content.scss';

function Dashboard() {
    return (
        <React.Fragment>
            {dashboardChart()}
            {dashboardReport()}
        </React.Fragment>
    );
}

function dashboardChart() {
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
            <Card
                style={{width: '30%'}}
                content={[
                    <p>Installations on active devices</p>,
                    <p>Installations on active devices</p>
                ]}/>
            {/*<Card content={ActiveDevices} style={{width: '30%'}}/>*/}
            <Button text="Configuring report" color="primary" bordered rounded/>
            <Button text="Configuring report" color="accent" blanked/>
            <Button text="Configuring report" color="accent" rounded shadowed/>
            <Card content={[Button, ChartLine]}/>
            <Card content={Table}/>
            <Card content={Table}/>
        </React.Fragment>
    );
}

/*function ActiveDevices() {
    return (
        <React.Fragment>
            <p>Installations on active devices</p>
            <p>Installations on active devices</p>
        </React.Fragment>
    );
}*/

//onClick={window.alert("+++++++++")}
function dashboardReport() {
    return (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
    );
}

export const titleDashboard = 'Dashboard';
export default Dashboard;
