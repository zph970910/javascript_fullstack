import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/component/example1';
import Example2 from '../src/component/example2';
import Example3 from '../src/component/example3';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Example3 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
