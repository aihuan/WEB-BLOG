// 在一个对象中绑定函数，我们称之为这个对象的方法 ex:对象的定义是{}
var person = {
    name: 'zhh',
    age: '18',
    walk: function() {
        return 'can run';
    }
}
console.log('walk===' + person.walk());
// 绑定在对象上的函数称之为方法。