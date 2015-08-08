handybower
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-handybower
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-handybower
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-handybower.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-handybower/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-handybower
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-handybower.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-handybower.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-handybower
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-handybower.svg
[bd_npm_url]: http://www.npmjs.org/package/handybower
[bd_npm_shield_url]: http://img.shields.io/npm/v/handybower.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Install bower components and collect main files.

<!-- Description End -->



<!-- Sections Start -->
<a name="sections"></a>

What's This?
-----

Wrapper utility for `bower install`.
bower is great, but when installing, it downloads entire repositories and you need to find files your own.
Really annoying.

So here is handybower, which calls `bower install` and collect main files automatically.

Installation
-----

```bash
npm install handybower --save
```

Usage
-------

```javascript
var handybower = require('handybower');

handybower([
    "jquery",
    "angular#1.4.3"
], {
    dest: "src/third_party" // Dirname to save files.
}, function (err) {
    // Will generate:
    // - src/third_party/jquery.js
    // - src/third_party/angular.js
});
```

From CLI
-----

Install as global module.

```bash
$ npm install handybower -g
```

Install via CLI.

```bash
$ handybower -d src/third_party jquery angular#1.4.3
```

<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-handybower/blob/master/LICENSE).

<!-- LICENSE End -->


