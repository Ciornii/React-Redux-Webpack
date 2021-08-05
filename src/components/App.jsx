import React from 'react';
import './app.less';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './main/Main';

const App = () => {
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <Route path='/' component={Main} />
        </BrowserRouter>
    );
};
export default App;
