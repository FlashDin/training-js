// in: abcd
// out: ABCD
function toUpper(str) {
    let upper = ["A", "B", "C", "D", "E", "F"];
    let lower = ["a", "b", "c", "d", "e", "f"];
    let res = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < lower.length; j++) {
            if (str.charAt(i) === lower[j]) {
                res += upper[j];
            }
        }
    }
    return res;
}

// in: ABCD
// out: abcd
function toLower(str) {

}

// in: a bcd
// out: aBcd
function toCamel(str) {

}

// in: a bcd
// out: ABcd
function toPascal(str) {

}

// in: a bcd
// out: a_bcd
function toSnake(str) {

}

// in: a bcd
// out: a-bcd
function toKebab() {

}

// in: a_bcd
// out: A bcd
function toHuman() {

}

// in: a_bcd
// out: A Bcd
function toTitle() {

}

// in: 3
// out: false
// in: a
// out: true
function isLetter() {
    return true;
}

export {
    toUpper,
    toLower
}
