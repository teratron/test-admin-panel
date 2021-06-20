import React from 'react';

import ChartLine from '../Chart/Line';
import Button from '../Button';
import Table from '../Table';
import Card from '../Card';

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

export default DashboardChart;
