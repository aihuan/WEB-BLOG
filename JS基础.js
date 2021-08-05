// 
false == 0 //true
false === 0 //false 
    // ==比较时会自动转换数据类型在比较，很多时候会得到比较诡异的结果 
    // ===不会转化类型，是直接比较的 在实际环境中，尽量不要使用== 它有设计缺陷
    // ES6新增一个多行表示方式 ` `可以直接在这里换行
let mu = `this 
 is
 multiple
 style 
`
console.log(mu);
//1. toUpperCase()字符串操作 都变成大写
//2. toLowerCase()                小写

//3.indexOf()会搜索指定字符串出现的位置
var s = "Hello,World"
console.log(s.indexOf('World')) //6 如果没有找到那就返回-1
    //4.substring() 返回指定索引区间的字串
console.log(s.substring(0, 7)); //hello,w

// caution 编写JavaScript代码时，不要直接去修改Array大小 
// 5.slice()对应4截取字符串 只不过他返回一个新的Array
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
// 注意到slice()的起止参数包括开始索引，不包括结束索引。

// 如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array：

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
console.log(aCopy); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

// 6.push 向Array末尾添加若干元素，pop()把Array最后一个元素删除掉
// 7.unshift 向头部添加若干元素 shift把Array的第一个元素删除掉
// 8.sort()可以直接对当前Array排序，修改其元素位置
// 9.reserve()把整个Array的元素给反转

//==================splice=========================//
//10. splice是修改Array的万能方法 它可以从指定的索引位置删除元素，然后再从该位置添加若干元素


var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

// 11.concat 将两个Array连接起来， Array1.concat(Array2) 返回一个新的Array 并没有修改当前Array

// 12.join() 当前Array的每个元素用指定的字符串连接起来，然后返回链接后的字符串
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'