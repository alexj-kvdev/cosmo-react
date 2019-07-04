import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import config from './config'

import https from "https";

ReactDOM.render(<App/>, document.getElementById('root'))

if(config.heroku){
    //for Heroku not sleep
    setInterval(function() {
        https.get(config.herokuHttps, (result) => {
        });
    }, 300000); // every 5 minutes (300000)
}