const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoid2hpc2tleS1qYWNrIiwiYSI6ImNrZTF2b2dxMTAzYXQycmxmZjhkYnAzZzIifQ.dhTi60tNpSSOghrc02E6vg&limit=1';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services');
        } else if (body.features.length === 0) {
            callback('Location not found');
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;