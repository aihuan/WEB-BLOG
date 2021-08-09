// 在一个对象中绑定函数，我们称之为这个对象的方法 ex:对象的定义是{}
var person = {
    name: 'zhh',
    age: '18',
    walk: function() {
        return 'can run';
    }
}
console.log('walk===' + person.walk());
// 绑定在对象上的函数称之为方法。 this 关键字，以及使用apply call 调用区别 apply 打包成array call 是按参数顺序

/*高阶函数===JS的函数其实都指向某个变量，既然变量可以指向函数，函数的参数可以接收变量，那么一个函数的参数
就可以接收另一个函数作为参数，这种函数就称为高阶函数*/
// Map reduce
function pow(x) {
    return x * x;
}
var arr = [2, 5, 3, 8, 9, 11, 12];
var mu = arr.map(pow);
var str1 = arr.map(String);
console.log("mu===" + mu); //mu===4,25,9,64,81,121,144
console.log("str1===" + str1); //str1===2,5,3,8,9,11,12 字符串

// 也可以直接转换为字符串

// reduce 可以求数组的和 ，也可以换成一个整数 *10
var arr = [1, 3, 5, 7, 9];
arr.reduce(function(x, y) {
    return x + y;
}); // 25

// filter 过滤某些元素 符合规则的 
var f1 = arr.filter(x => x > 5)
console.log(f1);