import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN || ''}
    clientId={process.env.REACT_APP_CLIENT_ID || ''}
    redirectUri={window.location.origin}
    audience={process.env.REACT_APP_AUDIENCE || ''}
    scope={process.env.REACT_APP_SCOPE || ''}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
