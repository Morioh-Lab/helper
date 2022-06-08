
const { classNames } = require("./dist");

var arr = ['b', { c: true, d: false }];

console.log(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''))