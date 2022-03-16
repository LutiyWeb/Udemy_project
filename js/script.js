'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'blue';
// box.style.borderRadius = '30px';
box.style.cssText = 'background-color: #000; border-radius: 30px; width: 280px;';


btns[1].style.width = '50px';

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.opacity = '0.1';
});

const div = document.createElement('div');
div.classList.add('black');
// document.body.append(div);
wrapper.append(div);
div.innerHTML = '<h1>Hello world</h1>';
    // wrapper.prepend(div);
    // hearts[2].before(div);
    // circles[0].remove();
    // hearts[1].replaceWith(circles[0]);
    // const text = document.createTextNode('Text generic code');