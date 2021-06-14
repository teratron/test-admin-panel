import React from 'react';

import Header from '../Header';
import Main from '../Main';
import Spinner from '../Main';
import './app.scss';

function App() {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <div className="app">
                <Header/>
                <Main/>
            </div>
        </React.Suspense>
    );
}

export default App;
