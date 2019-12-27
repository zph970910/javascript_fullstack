"use strict";
var yg;
(function (yg) {
    yg[yg["No"] = 0] = "No";
    yg["Yes"] = "Yes";
})(yg || (yg = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
(function (Direction) {
    Direction[Direction["Center"] = 1] = "Center";
})(Direction || (Direction = {}));
console.log(Direction);
//# sourceMappingURL=enum.js.map