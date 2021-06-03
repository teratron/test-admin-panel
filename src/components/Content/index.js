import React from 'react';

import ChartLine from '../Chart/Line';
import Button from '../Button';
import Table from '../Table';
import Card from '../Card';
import './content.scss';

function Content() {
    return (
        <section className="app-main-content">
            <Card content={ChartLine}/>
            <Card content={<Table bordered striped/>}/>
            <Button text="CONFIGURING REPORT" color="secondary" bordered rounded shadowed/> {/* disabled*/}
        </section>
    );
}

export default Content;