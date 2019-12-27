"use strict";
var getUsername = function (user) {
    user.say = function (words) {
        return 'hello world';
    };
};
function CalculateAreas(config) {
    var square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}
//# sourceMappingURL=interface.js.map