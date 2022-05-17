import React from 'react';

import Spinner from './components/Spinner';
import Header from './components/Header';
import Main from './components/Main';
import './static/scss/app.scss';

function App() {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <div className="app _marker">
                <Header/>
                <Main/>
            </div>
        </React.Suspense>
    );
}

export default App;
