import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import App from './App';

// Styles
import 'bulma/css/bulma.css';
import 'bulma-checkradio/dist/bulma-checkradio.min.css';
import 'bulma-tooltip/dist/bulma-tooltip.min.css';
import './index.css';

// Routes
import Routes from './Routes';


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
