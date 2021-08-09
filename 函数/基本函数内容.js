// 函数是一种最基本的代码抽象方式
/*函数 如果函数没有return 那么函数结果是undefined*/

// 如果要避免收到undefined 可以进行判断 
function abs(x) {
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
/*a==1 b==2  rest==3,4,5,6,6,7  */