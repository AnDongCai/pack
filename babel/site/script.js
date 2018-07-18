// 手机全面支持ES6 代码小且运行更好
// PC网站 ES6-> ES5运行
const str = '您好！';

let func = () => {
    console.log("bbb");
}

const appEle = document.querySelector('#app');
const foods = ['pear', 'apple', 'bread', 'race', '大棒骨', '饺子'];
appEle.innerHTML = foods.map(food => {
    return`
    <div>${food}</div>
    `
}).join('')