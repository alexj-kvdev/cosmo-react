const config = {
    herokuHttps: 'https://powerful-coast-80128.herokuapp.com/',
    herokuHttp: 'http://powerful-coast-80128.herokuapp.com/',
    heroku: false
}
  
// eslint-disable-next-line
if (process.env.NODE_ENV === "production") {
    //for Heroku
        config.jsonServer = 'https://swapi.co/api'
        config.heroku = true

    } else {
        config.jsonServer = 'http://localhost:3004'
}


export default config;
