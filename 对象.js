// 对象是用来描述的 人或物
var xiaohong = {
        name: 'xiaohong',
        'middle-school': 'hope school',
    }
    // 因为 middle-school 不是一个有效的变量 所以不可以直接用xiaohong.middle-school引用

console.log(xiaohong['middle-school']);

// 检测对象是否拥有该属性 in  拥有则返回true
console.log('name' in xiaohong);

// 要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法：
/*建议 else 只有一行代码 也要加上 {}
 */

// for循环的一个变体是for ... in循环，它可以把一个对象的所有属性依次循环出来：
// for in
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key); // 'name', 'age', 'city'
}
for (var key in o.hasOwnProperty()) {
    console.log(key); // 'name', 'age', 'city'
}
//如果要过滤掉对象属性的继承，那么我们可以用hasOwnProperty()

// !!特别要注意的是，我们对array 进行for in 时，得到的是String，而不是Number 切记切尔。
// while |for |do while do while至少会执行一次

/*===============Map Set==================*/
// ES6引用新的数据类型  因为JS中的对象都是键值对的形式，然而数值却不能作为键值对，所以引用了支持的
var m = new Set()
var n = new Map()

var m = new Map([
    ['Michael', 95],
    ['Bob', 75],
    ['Tracy', 85]
]);
m.get('Michael'); // 95

var stu = new Map();
stu.set('lkk', 99);
console.log(stu); //不能多次给一个Map对象赋值 那么后面的会覆盖前面的
// Set 给定一个Array 如果重复了，那么会自动清除重复的值
var num = new Set([1, 3, 4, 3, 5, 6])
num.add(9) //(5)就没有效果的 delete 删除
console.log(num); //可以重复添加，但不会有效果，用add添加