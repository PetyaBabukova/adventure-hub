const config ={
    development: {
        PORT: 5000,
        DB_CONNECTION: 'mongodb://localhost/adventure-channel',
        WEATHER_CONNECTION: 'http://api.weatherstack.com/current?access_key=9209c11e92ec968c4c3a8f0380a49a44&query='
    },
    // production: {
    //     PORT: 90,
    //     DB_CONNECTION: 'mongodb+srv://Petya:Petya@cubicles.jejjo.mongodb.net/cubicle?retryWrites=true&w=majority'
    // }
    //npm run prod
}

module.exports = config[process.env.NODE_ENV.trim()]