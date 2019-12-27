"use strict";
function assigned(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bpttom: c,
        left: d
    };
}
assigned(1);
assigned(1, 2);
assigned(1, 2, 3, 4);
//# sourceMappingURL=function.js.map