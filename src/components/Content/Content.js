import React from 'react';
import ChartLine from '../Chart/Line';
import Button from '../Button/Button';
import './Content.css';

function Content() {
    return (
        <section className="App-main-content">
            <ChartLine/>
            <Button text="Configuring report" color="secondary" rounded bordered shadowed/> {/* disabled*/}
        </section>
    );
}

export default Content;