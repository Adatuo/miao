//function f(params) {exports,module} //也会传入其它参数id,require,_filename,_dirname(不能起这个名字)

//exports.pi = '3.14159265358979328462643383279'
//exports = '3.14159265358979328462643383279' 不可以作用域不一样
//return '3.14159265358979328462643383279' 可以但是有return可能会报错
//exports.default = '3.14159265358979328462643383279'
//exports.default = '3.14159265358979328462643383279'

module.exports = '3.14159265358979328462643383279'
//想要导入多个值,实际上exports == module.exports,因为传入了exports
// exports.foo = function () {}
// exports.bar = function () {}
// exports.baz = function () {}
//也可以这样
// module.exports.foo = function () {}
// module.exports.bar = function () {}
// module.exports.baz = function () {}
