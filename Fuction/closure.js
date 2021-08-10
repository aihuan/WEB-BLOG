// 函数做为返回值 高阶函数除了可以接收函数做为参数外，还可以把函数做为结果值返回
/*不立即求和，而是返回求和的函数*/

function lazy_num(arr) {
    var sum = function() {
        return arr.reduce(function(x, y) {
            return x + y;
        });
    }
    return sum
}

var f = lazy_num([1, 2, 3, 4, 5]); //function sum
f(); //15 才是真正的返回值
//返回的函数没有立即执行，而是调用f()后才执行

// 返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
// 如果必须要引用，那么可以使用闭包‘
function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push((function(n) {
            return function() {
                return n * n;
            }
        })(i)); //立即执行语句
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.log(f1()); // 1
console.log(f2()); // 4
console.log(f3()); // 9

// 可以封装一个私有变量 内部隐藏 外部看不到