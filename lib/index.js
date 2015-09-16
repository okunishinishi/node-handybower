/**
 * Install bower components and collect main files.
 * @module handybower
 * @version 1.2.2
 */

"use strict";

var handybower = require('./handybower.js'),
    pkg = require('../package.json');

var lib = handybower.bind(this);
lib.handybower = handybower;
lib.version = pkg.version;

module.exports = lib;