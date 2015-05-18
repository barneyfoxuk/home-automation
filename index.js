var wit = require('node-wit');
var fs = require('fs');
var output = require('./output');

var ACCESS_TOKEN = '62QCSE6QH35VUYTQYVXANPUYWPDUBWCB';

console.log('Sending text & audio to Wit.AI');

// wit.captureTextIntent(ACCESS_TOKEN, 'Hello world', function (err, res) {
//     console.log('Response from Wit for text input: ');
//     if (err) console.log('Error: ', err);
//     console.log(JSON.stringify(res, null, ' '));
// });

var stream = fs.createReadStream('demo.wav');

output.say('hmm.. give me a sec to think about that..');

wit.captureSpeechIntent(ACCESS_TOKEN, stream, 'audio/wav', function (err, res) {
  console.log('Response from Wit for audio stream: ');

  if (err) {
    console.log('Error: ', err);
  } else {
    console.log(JSON.stringify(res, null, ' '));
    output.say('you just said, ' + res.outcomes[0]._text);
  }

});
