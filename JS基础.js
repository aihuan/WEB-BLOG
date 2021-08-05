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