// 引入模块
var greet = require('./hello');
var s = 'lkkzl';
console.log(greet(s));
//Common JS规范
/*输出 module.export 
 导入 var xxx = require('path')
*/
// node 内置的fs模块就是文件系统模块，负责读文件 提供了异步和同步的方法
// 同步需要等待返回 而异步不需要等待返回