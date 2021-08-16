// AJAX 执行异步网络请求，通过回调函数获得响应
// function success(text) {
//     var textarea = document.getElementById('test-response-text');
//     textarea.value = text;
// }

// function fail(code) {
//     var textarea = document.getElementById('test-response-text');
//     textarea.value = 'Error code: ' + code;
// }

// var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

// request.onreadystatechange = function() { // 状态发生变化时，函数被回调
//     if (request.readyState === 4) { // 成功完成
//         // 判断响应结果:
//         if (request.status === 200) {
//             // 成功，通过responseText拿到响应的文本:
//             return success(request.responseText);
//         } else {
//             // 失败，根据响应码判断失败原因:
//             return fail(request.status);
//         }
//     } else {
//         // HTTP请求还在继续...
//     }
// }

// // 发送请求:
// request.open('GET', '/api/categories');
// request.send();
// open 有三个参数 第一个是 GET POST 第二个是 请求地址 第三个是 是否使用异步，默认是true
// alert('请求已发送，请等待响应...');

// JSONP 只能是GET请求 跨域请求 
/*浏览器支持HTML5,可以使用跨域策略 CORS  Access-Control-Allow-Origin*/
/*在JS中所有代码都是单线程执行的，所以所有事件都是单线程执行的 也都是异步请求执行，*/