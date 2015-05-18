'use strict';

var say = require('say');

var VOICE = 'Alex';

module.exports = {
  say: function (output) {
    say.speak(VOICE, output);
  }
}
