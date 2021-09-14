import React from 'react';

import Spinner from '../Spinner';
import Header from '../Header';
import Main from '../Main';
import './app.scss';

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
