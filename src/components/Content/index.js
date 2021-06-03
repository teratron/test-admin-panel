import React from 'react';
import ChartLine from '../Chart/Line';
import Button from '../Button';
import Table from '../Table';
import './content.scss';

function Content() {
    return (
        <section className="app-main-content">
            <ChartLine/>
            <Button text="CONFIGURING REPORT" color="secondary" bordered rounded shadowed/> {/* disabled*/}
            <Table bordered striped/>
        </section>
    );
}

export default Content;