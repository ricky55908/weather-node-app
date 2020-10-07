const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=4125ce862d20636d38e55af8a33f6dde&query=' + latitude + ',' + longitude;

  request({url, json: true}, (error, {body}) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined);
    } else if (body.error) {
      callback('Unable to find the forecast. Try out a different search term.', undefined);
    } else {
      callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.');
    }
  });
};

module.exports = forecast;
