#!/usr/bin/env node

/**
 * Test for handybower.js
 * Runs with nodeunit.
 */

"use strict";

var childProcess = require('child_process'),
    handybower = require('./handybower'),
    handybowerBin = require.resolve('./bin/handybower');

exports['From cli.'] = function (test) {
    var command = [
        handybowerBin,
        'jquery',
        'angular',
        '-d tmp/testing_bowermains_by_bin'
    ].join(' ');
    childProcess.exec(command, function (err, stdout, stderr) {
        test.ifError(err);
        if (stdout) {
            console.log(stdout);
        }
        if (stderr) {
            console.error(stderr);
        }
        test.done();
    });
};

exports['Handy bower.'] = function (test) {
    handybower(['ionicons', 'angular'], {
        dest: 'tmp/testing_bowermains',
        verbose: true
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

