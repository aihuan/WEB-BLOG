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