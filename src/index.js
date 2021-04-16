import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import "react-toastify/dist/ReactToastify.css";
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify'
import config from "./config/config.json"


Amplify.configure({
  Auth:{
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId:  config.cognito.APP_CLIENT_ID 
  }
});



ReactDOM.render(
    <App />,
  document.getElementById('root')
);

