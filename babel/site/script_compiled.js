'use strict';

// 手机全面支持ES6 代码小且运行更好
// PC网站 ES6-> ES5运行
var str = '您好！';

var func = function func() {
    console.log("bbb");
};

var appEle = document.querySelector('#app');
var foods = ['pear', 'apple', 'bread', 'race', '大棒骨', '饺子'];
appEle.innerHTML = foods.map(function (food) {
    return '\n    <div>' + food + '</div>\n    ';
}).join('');
