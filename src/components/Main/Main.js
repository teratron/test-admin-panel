import React from "react";
import './Main.css';
import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";

function Main() {
    return (
        <main className="App-main">
            <Sidebar/>
            <Content/>
        </main>
    );
}

export default Main;
