let obj = { a: 1 };
let objA = { b: 2 };
var obj1 = Object.assign({}, obj, objA);// assign是以obj为基础构建新的对象
console.log(obj1);