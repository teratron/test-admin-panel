import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Content/Content';
import './Main.css';

function Main() {
    return (
        <main className="App-main">
            <Sidebar/>
            <Content/>
        </main>
    );
}

export default Main;
