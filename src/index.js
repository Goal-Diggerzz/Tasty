
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
ReactDOM.render(
  <React.StrictMode>

  <Auth0Provider
    domain="dev-u93qk6-3.eu.auth0.com"
    clientId="3nq1HCMbcdXloIHRpfUvO6kjpp3u3iZw"
    redirectUri={window.location.origin}
>
  <BrowserRouter><App /></BrowserRouter>
  
</Auth0Provider>
</React.StrictMode>
,
document.getElementById('root')
);
