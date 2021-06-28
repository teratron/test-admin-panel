import React from 'react';

import ChartLine from '../../Chart/Line';
import Button from '../../Button';
import Table from '../../Table';

function DashboardChart() {
    return (
        <>
            <div className="navbar">
                <div>
                    <Button text="Configuring report" color="secondary" rounded shadowed/>
                </div>
                <div>
                    <Button text="Configuring report" color="secondary" rounded shadowed/>
                </div>
            </div>
            <div className="card" style={{width: '30%'}}>
                <p><strong>Installations on active devices</strong></p>
                <div className="bar" style={{alignItems: 'baseline'}}>
                    <output style={{fontSize: '5.5rem', lineHeight: 1}}>5,489</output>
                    <span>+3.79% vs previous 30 days</span>
                </div>
            </div>
            <div className="card">
                <ChartLine/>
            </div>
            <div className="card">
                <Table/>
            </div>
        </>
    );
}

export default DashboardChart;
