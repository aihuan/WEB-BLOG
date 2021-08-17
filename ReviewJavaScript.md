### 快速入门

#### 数据类型和变量

```js
数据类型比较：
== 自动转换类型在比较
=== 比较，不会自动转换类型
在比较的时候尽量不要用== 有时候会得到出乎意料的结果 比较的时候我们会选择===

浮点数的比较：
浮点运算的时候会产生误差 要比较他们之间差的绝对值
```

#### 操作字符串

```js
字符串常见操作：
toUpperCase：大写
toLowerCase:小写
indexOf:搜索指定字符串出现的位置
subString:返回指定索引区间的字串
```

#### 数组

```js
Array包含任意数据类型：
length:获得任意长度
indexOf：搜索指定
slice:截取Array的部分元素，返回一个新的数组
push:末尾添加
pop:最后一个元素删除
unshift:头部添加
shift:头部删除
sort 排序
reverse:反转
splice:万能方法
concat:链接，但并没有修改当前array而是返回了一个新的数组
join:把当前Array的每个元素都用指定的字符串连接起来，返回连接后的字符串
```

#### Map和Set

```js
JS默认对象表示方式{}可以视为其它语言中的Map和Dirctionry,即一组键值对
但是，JS中有个问题，就是键必须是字符串，但实际上Number也是可以作为键：
Map.
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value

Set.是一组key的集合，但不存储value
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3

add(key)添加元素
s.add(4);
s; // Set {1, 2, 3, 4}
s.add(4);
s; // 仍然是 Set {1, 2, 3, 4}
```

#### Iterable

```js
该类型,通过自带的方法 
for...of 遍历
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
forEach遍历
```

### 函数

#### 函数定义和调用

```js
关键字
argument
只在函数内部起作用，永远指向当前调用的所有参数
rest：ES6标准引入的
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
多余的参数传给rest数组 如果没有就是undefined
```

#### 变量作用域与解构赋值

```js
注意变量提升
先使用后赋值 不会报错只会说undefined

常量：const 
let const 具有块级作用域

解构赋值 ES6引入
同时对一组变量赋值
var [a,b,c]=['1','2','3'];
使用场景：快速获取当前页面的域名和路径
var {hostname:domain,pathname:path}=location
```

#### 高阶函数

```js
一个函数接收另一个函数作为参数=>高阶函数
map:对数组中的元素进行操作
function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);

reduce:必须接收两个参数，可用于求和或其它运算
var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x * 10 + y;
});

课后练习题：将字符转化为数字
var arr =['1','2','3'];
var r=arr.map(Number) 或者
var r = arr.map(str=>parseInt(str))

filter 过滤元素
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]

Array提供了高阶函数
every find forEach()
```

#### 闭包

```js
函数作为返回值：比如不需要立即求和，在后面代码中根据需要再计算。

function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

此时如果直接用闭包那么，最后返回值都是相同的
如果非要在在闭包中使用循环变量，那么我们就必须要再返回一个函数 这里是创建了一个匿名函数
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function(){
                return n * n;
            }  
        })(i));
    }
    return arr;
}
```

### 标准对象

#### Date

```js
JS中一切都是对象，typeof获取对象类型，但返回的都是字符串
var now = new Date();
now 返回当前时间
//创建指定的日期时间
var d = new Date(2015, 5, 19, 20, 15, 30, 123);
d; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)
//要注意 月份是从0开始的 0~11对应1~12

```

#### RegExp

```js
\d匹配一个数字
\w匹配一个字母或数字
. 可以匹配任意字符 比如：'js.' 可以匹配'jsp','jss'
匹配变长的字符,*来匹配任意个字符(包括0个),+表示至少一个字符,?表示0个或1个字符用{n}表示n个字符
{n,m}表示n-m个字符
\s可以匹配一个空格

进阶：
做更精确的匹配，可以用[]
.[0-9a-zA-Z\_]可以匹配一个数字、字母或者下划线；

.[0-9a-zA-Z\_]+可以匹配至少由一个数字、字母或者下划线组成的字符串，比如'a100'，'0_Z'，'js2015'等等；

.[a-zA-Z\_\$][0-9a-zA-Z\_\$]*可以匹配由字母或下划线、$开头，后接任意个由一个数字、字母或者下划线、$组成的字符串，也就是JavaScript允许的变量名；

.[a-zA-Z\_\$][0-9a-zA-Z\_\$]{0, 19}更精确地限制了变量的长度是1-20个字符（前面1个字符+后面最多19个字符）
^表示行的开头，^\d表示开头必须是数字
$表示行的结束，\d$表示必须以数字结束

使用表达式：
方法一：直接通过/正则表达式/写出来
第二种是通过new RegExp('正则表达式')
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');

re1; // /ABC\-001/
re2; // /ABC\-001/ 
\\转义字符 \
切分字符串：
'a b   c'.split(' '); // ['a', 'b', '', '', 'c']
'a b   c'.split(/\s+/); // ['a', 'b', 'c']
'a,b, c  d'.split(/[\s\,]+/); // ['a', 'b', 'c', 'd']
全局搜素 'g'
```

#### JSON

```js
1.对象序列化成json格式
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
avr s=JSON.stringify(xiaoming)
JSON.stringify(xiaoming, null, '  ');//按缩进输出
JSON.stringify(xiaoming, ['name', 'skills'], '  ');//筛选对象键值
```

### 面向对象编程

#### class继承

```js
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}
```

### 浏览器

#### 浏览器对象

```html
window对象不但充当全局作用域，而且表示浏览器窗口
innerWidth和innerHeight
outerWidth和outerHeigth 整个浏览器窗口的宽高
navigator对象表示浏览的信息，最常用的属性 appName……
location 对象表示当前页面的URL信息 
location.href

history保存了浏览器的历史记录  这个对象现在都不要去使用了 back forward 简单的后退和前进
```

#### AJAX

```html
执行异步网络请求
status===200 执行响应成功
1.做代理，
2.Flash
3.JSONP 只能GET请求

CORS执行跨域请求：
Origin表示本域，也就是浏览器当前页面的域。当JavaScript向外域（如sina.com）发起请求后，浏览器收到响应后，首先检查Access-Control-Allow-Origin是否包含本域，如果是，则此次跨域请求成功，如果不是，则请求失败，JavaScript将无法获取到响应的任何数据。
```

#### Promise

```js
//承诺将来会执行的就是Promise
function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            log('call resolve()...');
            resolve('200 OK');
        }
        else {
            log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}

new Promise(test).then(function(result){
    console.log('成功:'+result)
}).catch(function(reson){
    console.log('失败'+reason)
})
```

### jQuery-$全局

#### 选择器

```
选择器是jQuery的核心==$('#dom-id')  建议看廖雪峰
```

#### AJAX

```js
jQuery在全局对象$也就是jQuery绑定了ajax()函数，可以处理AJAX请求
ajax(url,settings)
常用的选项：
1.async:是否异步 不要指定false
2.method:发送的method，缺省为'GET',可指定为POST,GET,PUT等
3.contentType:发送POST请求的格式，默认值为'application/x-www-form-urlencoded; charset=UTF-8'，也可以指定为text/plain、application/json；
4.data：发送的数据，可以是字符串、数组或object。如果是GET请求，data将被转换成query附加到URL上，如果是POST请求，根据contentType把data序列化成合适的格式；
5.headers：发送的额外的HTTP头，必须是一个object；
6.dataType：接收的数据格式，可以指定为'html'、'xml'、'json'、'text'等，缺省情况下根据响应的Content-Type猜测。

get
var jqxhr=$.get('path',{
name:'Boc',
check:1
})
post
var jqxhr = $.post('/path/to/resource', {
    name: 'Bob Lee',
    check: 1
});
//实际构造的数据name=Bob%20Lee&check=1作为POST的body被发送。
getJSON
var jqxhr = $.getJSON('/path/to/resource', {
    name: 'Bob Lee',
    check: 1
}).done(function (data) {
    // data已经被解析为JSON对象了
});
```

