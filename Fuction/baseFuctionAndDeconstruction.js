// 函数是一种最基本的代码抽象方式
/*函数 如果函数没有return 那么函数结果是undefined*/

// 如果要避免收到undefined 可以进行判断 
/*function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
console.log(abs(-1));
// 其实就算你不传任何参数，本身还有一个赠送的参数argument （函数传参内部）
// 另外有一个知识点就是rest 也就是获得额外的参数 使用arguments比较麻烦 所以在ES6中引入了 ...rest
function foo(a, b, ...rest) {
    console.log('a==' + a);
    console.log('b==' + b);
    console.log('rest==' + rest);
}
foo(1, 2, 3, 4, 5, 6, 6, 7);
/*a==1 b==2  rest==3,4,5,6,6,7   如果正常参数都没有填满，那么rest为空数组，而不是undefined*/

/*-=============变量作用域与解构赋值===============*/
// 变量提升
// JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部：

/*'use strict';

function foo() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
}

// undefined 相当于 var y ,所以我们要严格遵守先定义后使用这一原则
foo();

// 名字空间 绑定在一个全局变量上   减少全局变量的冲突
// ex:
var MYAA = {};
MYAA.name = "Myapp";
MYAA.version = "1.0";
// 其它函数
MYAA.foo = function() {
    return 'foo'
}

// 为了解决块级作用域 ES6中引入了 let let代替var申明一个块级作用域变量 const 也是块级作用域

// 解构赋值 可以同时对一组变量赋值
// 如果数组本身还有嵌套，也可以通过下面的形式进行解构赋值，注意嵌套层次和位置要保持一致：
/*var [x, y, z] = ['hello', 'JavaScript', 'ES6'];

let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
x; // 'hello'
y; // 'JavaScript'
z; // 'ES6'
// 解构赋值还可以忽略某些元素：

let [, , z] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素
z; // 'ES6'

// 解构赋值应用场景
/*
1.交换
var x=1,y=2;
[x,y]=[y,x]
2.快速获取当前页面的域名和路径
var {hostname:domain,pathname:path}=location;
3.如果一个函数接收一个参数作为对象，那么可以使用解构赋值直接把对象的属性绑定到变量中，ex:快速创建一个Date对象
function buildDate({year,month,day,hour=0,minute=0,second=0}){
  return new  Date(year+'-'+month+'-'+day+' '+hour+':'minute+':'+second)
}
buildDate({year:2017,month:1,day:1});
*/
function buildDate({ year, month, day, hour = 0, minute = 0, second = 0 }) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
console.log(buildDate({ year: 2021, month: 1, day: 1 }));