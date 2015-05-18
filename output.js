'use strict';

var say = require('say');

var VOICE = 'Vicki';

var output = module.exports = {
  fromWit: function (response) {
    output.say('You just said ' + response._text)
  },

  say: function (output) {
    say.speak(VOICE, output);
  }
}
