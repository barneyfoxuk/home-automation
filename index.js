var wit = require('node-wit');
var fs = require('fs');

var output = require('./output');
var weather = require('./weather');

var ACCESS_TOKEN = '62QCSE6QH35VUYTQYVXANPUYWPDUBWCB';

var intent = {
  greeting: output.fromWit,
  weather: weather.fromWit
};

var stream = fs.createReadStream('audio/weather-london-tomorrow.wav');

output.say('Searching..');

wit.captureSpeechIntent(ACCESS_TOKEN, stream, 'audio/wav', function (err, res) {
  console.log('Response from Wit for audio stream: ');

  if (err) {
    console.log('Error: ', err);
  } else {
    console.log(JSON.stringify(res, null, ' '));

    try {
      intent[res.outcomes[0].intent](res.outcomes[0]);
    }
    catch (err) {
      output.say('Whoops. Looks like that intent could not be mapped.  Sorry.');
    }
  }

});
