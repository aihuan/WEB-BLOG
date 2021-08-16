// 请求将来一定会执行的就是 Promise
/*先统一执行AJAX逻辑 不去管运行结果，然后根据结果是成功还是失败，在将来的某个时候会
调用success函数或fail函数
*/
// ES6中统一规范 由浏览器直接支持
'use strict';
new Promise(function() {});
console.log('支持Promise');

/*只关心自己的逻辑 而不关心具体的resolve和reject 将如何处理结果*/
// 下面演示一个案例。也就是生成一个0-2之间的随机数，如果小于1，则等待一段事件后返回成功，否则失败

function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    console.log("timeOut=" + timeOut);
    setTimeout(function() {
        if (timeOut < 1) {
            console.log('call resolve----')
            resolve('200 Ok')
        } else {
            console.log('call reject---')
            reject('timeOut' + timeOut + 'second')
        }
    }, timeOut * 1000)
}

// 定义了函数 我们接下来开始用Promise对象来执行它，并在某个时刻获得成功或失败的结果
var p1 = new Promise(test);
var p2 = p1.then(function(result) {
    console.log('成功：' + result);
})
var p3 = p2.catch(function(reson) {
    console.log('失败：' + reson);
})
console.log("=========测试不同的Promise=============");
// 所以我们串联起来之后，代码就可以简化出来
new Promise(test).then(function(result) {
    console.log("成功" + result);
}).catch(function(reson) {
    console.log("失败" + reson);
})

/*Promise的好处就是将执行代码和结果分离开来了  setTimeout可以看成一个模拟网络等异步执行的函数*/
/*Promise还可以并行执行异步任务 使用Promise.all()*/
var z1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'P1')
});
var z2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 600, 'P2')
});
Promise.all([z1, z2]).then(function(results) {
    console.log(results); //获取一个Array
});

/*有时候多个异步任务是为了容错，这时候我们可以先返回一个 用Promise.race*/
Promise.race([z1, z2]).then(function(results) {
        console.log(result); //z1 z1执行的快 先被输出，而z2后执行 所以得出的结果就会被丢弃
    })
    // 我们组合使用Promise，就可以把很多异步任务以并行和串行的方式组合起来执行。