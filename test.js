
const { classNames } = require("./dist");

var arr = ['b', { c: true, d: false }];

console.log(classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }))