// 提供通用的加密算法 MD5和SHA1
// MD5常用的hash算法
var crypto = require('crypto');
var hash = crypto.createHash('md5');
hash.update('hello world!');

console.log(hash.digest('hex'));

// Hmac 输入给一个密钥
// AES 对称加密
// Diffie-Hellman 密钥交换协议
// RSA非堆成加密