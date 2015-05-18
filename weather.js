'use strict';

var openweathermap = require('openweathermap');
var output = require('./output');
var moment = require('moment');

openweathermap.defaults = {
  units: 'metric',
  lang: 'de',
  mode: 'json'
};

var weather = module.exports = {
  fromWit: function (response) {
    var location        = response.entities.location[0].value;
    var datetimeFrom    = response.entities.datetime[0].value.from;
    var datetimeTo      = response.entities.datetime[0].value.to;

    var time = moment().calendar(datetimeFrom);

    weather.find(location, time);
  },
  find: function (location, time) {
    openweathermap.now({
      q: location
    }, function (err, json) {
      console.log(json);
      output.say('Looks like ' + json.weather[0].description + time + ' in ' + location);
    });
  }
}
