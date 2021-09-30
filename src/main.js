let html = document.querySelector('#html');
let style = document.querySelector('#style');

let string = `
/* 
* 你好，我是一名前端新人
* 接下来我演示一下我的前端功底
* 首先，我要准备一个 div
* 接下来我要加样式了
* 加的样式是
*/

#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*
* 接下来我把这个 div 变成一个八卦图
* 注意看好了
* 首先，把 div 变成一个园
*/
#div1 {
    border-radius: 50%;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    border: none;
}
/* 
* 八卦是阴阳形成的
* 一黑一白
*/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
* 加两个小球
*/
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/* 
*/
#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/*
旋转起来
*/
#div1 {
    animation: move 10s infinite linear;
}
`;
let string2 = "";
let n = 0;
let speed = 50;

const step = () => {
    setTimeout(() => {
        // 如果是回车，就不照搬
        // 如果不是回车，就照搬
        // string2 += (string[n] === '\n' ? '<br>' : string[n]);
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp;&nbsp;';
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        if (screen.width > 500) {
            window.scrollTo(0, 9999);
        } else {
            html.scrollTo(0, 9999);
        }
        if (n < string.length - 1) {
            // 如果 n 不是最后一个，就继续打印
            n += 1;
            step();
        }
    }, speed);
};

const subtractSpeed = function () {
    speed += 40;
    console.log(speed);
}

const addSpeed = function () {
    speed = speed - 40 > 0 ? speed - 40 : 0;
    console.log(speed);
}

step();