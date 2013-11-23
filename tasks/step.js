/*
 * grunt-step
 * https://github.com/shama/grunt-step
 *
 * Copyright (c) 2013 Kyle Robinson Young
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var readline = require('readline');

  grunt.registerTask('step', 'Add confirmation steps to your Grunt flow.', function() {
    var options = this.options({
      option: 'ack',
    });

    if (options.option !== false && grunt.option(options.option) !== true) {
      return true;
    }

    var done = this.async();
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Do you want to continue? (Y/n) ', function(answer) {
      rl.close();
      if (answer.toLowerCase() === 'n') {
        done(false);
      } else {
        done();
      }
    });
  });
};
