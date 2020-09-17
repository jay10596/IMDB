import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

import App from './App';
import './styles/main.css';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change unregister() to register() below.
serviceWorker.unregister();