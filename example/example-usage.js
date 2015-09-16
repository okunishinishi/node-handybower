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