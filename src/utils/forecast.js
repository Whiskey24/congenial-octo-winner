const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=31ce655009c5b5e4930641693800fdd2&query=' + latitude + ',' + longitude;
    console.log(url);
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out, it feels like ' + body.current.feelslike + ' degrees out');
        }
    });
}

module.exports = forecast;