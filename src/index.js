import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
