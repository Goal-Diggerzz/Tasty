// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
ReactDOM.render(
  <Auth0Provider
    domain="dev-zlbh2pxe.eu.auth0.com"
    clientId="pZR6b1r9SClLeCobyPnChmQZzm8Y1M8S"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
