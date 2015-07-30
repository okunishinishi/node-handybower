/**
 * Install bower components and collect main files
 * @function handyBower
 * @param {string|string[]} name - Module name to install.
 * @param {object} options - Optional settings.
 * @param {string} [options.dest='handybower_components'] - Destination directory path
 * @param {boolean} [options.verbose=false] - Log verbose.
 * @param {string[]} [options.main] - Name of main files. Default is `main` attribuite in installed bower.json.
 * @param {function} callback - Callback when done.
 */

"use strict";


var argx = require('argx'),
    writeout = require('writeout'),
    fs = require('fs'),
    path = require('path'),
    glob = require('glob'),
    async = require('async'),
    bower = require('bower'),
    Colorprint = require('colorprint/lib/colorprint');

function handyBower(names, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    options = args.pop('object');
    names = args.remain().reduce(_concat, []).map(function (name) {
        if (typeof(name) === 'object') {
            var data = name;
            return Object.keys(data).map(function (name) {
                return [name, data[name]].join('#');
            });
        } else {
            return String(name);
        }
    }).reduce(_concat, []);

    var logger = new Colorprint({
        PREFIX: '[handybower] '
    });

    var verbose = !!options.verbose,
        main = [].concat(options.main || '')
            .reduce(_concat, [])
            .filter(_notEmpty);

    if (verbose) {
        logger.trace('options:\n', options);
    }

    var destDir = options.dest || 'handybower_components';
    if (!destDir) {
        callback(new Error('dest is required.'));
        return;
    }

    var aborted = false;

    var components = {};
    logger.info('Installing started...');
    bower.commands
        .install(names, {
            force: true
        }, {
            interactive: false
        })
        .on('error', function (err) {
            callback(err);
            aborted = true;
        })
        .on('log', function (packet) {
            var data = packet.data || {};
            var endpoint = data.endpoint || {};
            var name = endpoint.name;
            components[name] = components[name] || data.canonicalDir;
        })
        .on('end', function (installed) {
            if (aborted) {
                return;
            }
            Object.keys(installed).forEach(function (name) {
                components[name] = components[name] || installed[name]['canonicalDir'];
            });
            var dirnames = Object.keys(components).map(function (name) {
                return components[name];
            });
            async.eachSeries(dirnames, function (dirname, callback) {
                var data = require(path.resolve(dirname, 'bower.json'));
                var found = [].concat(main && main.length ? main : data.main).map(function (pattern) {
                    return glob.sync(pattern, {cwd: dirname});
                }).reduce(_concat, []);
                if (verbose) {
                    logger.trace('main files:\n%s', found);
                }
                async.eachSeries(found, function (filename, callback) {
                    var src = path.resolve(dirname, filename),
                        dest = path.resolve(destDir, path.basename(filename));

                    async.waterfall([
                        function (callback) {
                            fs.readFile(src, callback);
                        },
                        function (content, callback) {
                            writeout(dest, String(content), {
                                mkdirp: true
                            }, callback);
                        },
                        function (result, callback) {
                            if (!result.skipped) {
                                logger.debug('File generated:', dest);
                            }
                            callback(null);
                        }
                    ], callback);
                }, callback);
            }, function (err) {
                if (err) {
                    console.error(err);
                    logger.error('...installing failed!');
                } else {
                    logger.info('...installing done!');
                }
                callback(err);
            });
        });
}

function _concat(a, b) {
    return a.concat(b);
}
function _notEmpty(val) {
    return !!val;
}
module.exports = handyBower;