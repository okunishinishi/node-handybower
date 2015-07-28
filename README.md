handybower
=========

Install bower components and collect main files.

<!-- Badge start -->

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![npm version][my_npm_budge_url]][my_npm_url]




Installation
-----

```bash
$ npm install handybower --save
```

Usage
-----

```javascript
var handybower = require('handybower');

handybower([
    "jquery",
    "angular#1.4.3"
], {
    dest: "src/third_party" // Dirname to save files.
}, function (err) {

});
```


Using CLI
-----

Install as global module.

```bash
$ npm install handybower --g
```

Install via CLI.

```bash
$ handybower -d src/third_party jquery angular#1.4.3 
```


License
-------
This software is released under the [MIT License][my_license_url].



<!-- Links start -->

[nodejs_url]: http://nodejs.org/
[npm_url]: https://www.npmjs.com/
[nvm_url]: https://github.com/creationix/nvm
[bitdeli_url]: https://bitdeli.com/free
[my_bitdeli_badge_url]: https://d2weczhvl823v0.cloudfront.net/okunishinishi/node-handybower/trend.png
[my_repo_url]: https://github.com/okunishinishi/node-handybower
[my_travis_url]: http://travis-ci.org/okunishinishi/node-handybower
[my_travis_badge_url]: http://img.shields.io/travis/okunishinishi/node-handybower.svg?style=flat
[my_license_url]: https://github.com/okunishinishi/node-handybower/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-handybower
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-handybower.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-handybower.svg?style=flat
[my_apiguide_url]: http://okunishinishi.github.io/node-handybower/apiguide
[my_lib_apiguide_url]: http://okunishinishi.github.io/node-handybower/apiguide/module-handybower_lib.html
[my_coverage_url]: http://okunishinishi.github.io/node-handybower/coverage/lcov-report
[my_coverage_report_url]: http://okunishinishi.github.io/node-handybower/coverage/lcov-report/
[my_gratipay_url]: https://gratipay.com/okunishinishi/
[my_gratipay_budge_url]: http://img.shields.io/gratipay/okunishinishi.svg?style=flat
[my_npm_url]: http://www.npmjs.org/package/handybower
[my_npm_budge_url]: http://img.shields.io/npm/v/handybower.svg?style=flat
[my_tag_url]: http://github.com/okunishinishi/node-handybower/releases/tag/
[my_tag_badge_url]: http://img.shields.io/github/tag/okunishinishi/node-handybower.svg?style=flat
