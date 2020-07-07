import React from 'react';
import AppRouter from './router';
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <div>
            <HashRouter>
                <AppRouter/>
            </HashRouter>
        </div>
    );
}

export default App;
