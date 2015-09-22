/**
 * @memberof module:handybower/lib/logging
 * @constructor HandybowerLogger
 */

"use strict";

var colorprint = require('colorprint');

/** @lends HandybowerLogger */
module.exports = colorprint.define({
    PREFIX: '[handybower] ',
    logInstallStarted: function () {
        var s = this;
        s.info('Installing started...');
    },
    logInstallFinished: function (err) {
        var s = this;
        if (err) {
            console.error(err);
            s.error('...installing failed!');
        } else {
            s.info('...installing done!');
        }
    },
    logMainFiles: function (files) {
        var s = this;
        s.trace('main files:\n%s', files);
    },
    logGenerated:function(dest){
        var s = this;
        s.debug('File generated:', dest);
    }
});
