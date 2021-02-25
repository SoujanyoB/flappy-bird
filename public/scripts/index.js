// 
// const { findDifficulty } = require("./difficulty");

// var difficultyDOM = document.getElementById('difficulty');
// var parentdifficultyDOM = difficultyDOM.parentNode.parentElement;


// var difficultydivDOM = document.querySelector('.difficulty');
// var difficultydivDOMPosition;


// function setDifficultydivDOMPosition() {
//     if (screen.width >= 450) {
//         difficultydivDOMPosition = parentdifficultyDOM.offsetLeft + difficultyDOM.offsetWidth/2 + 40;
//         difficultydivDOM.style.top = difficultyDOM.offsetTop + difficultyDOM.offsetHeight + "px";
//         difficultydivDOM.style.left = difficultydivDOMPosition + "px";
//     }
//     else {
//         difficultydivDOMPosition = parentdifficultyDOM.offsetTop + parentdifficultyDOM.clientHeight / 2;
//         difficultydivDOM.style.top = difficultydivDOMPosition + "px";
//     }
// }

// difficultyDOM.addEventListener('click', e => {
//     console.log(e.target);
//     setDifficultydivDOMPosition();
//     difficultydivDOM.classList.add('displayDiv');
// });



// for (var i = 0; i < difficultydivDOM.children[0].children.length; i++) {
//     difficultydivDOM.children[0].children.item(i).addEventListener('click', (e) => {
//         if (!e.target.classList.contains('active')) {
//             for (var j = 0; j < e.target.parentNode.children.length; j++) {
//                 if (e.target.parentNode.children.item(j).classList.contains('active'))
//                     e.target.parentNode.children.item(j).classList.remove('active');
//                     difficultydivDOM.classList.remove('displayDiv');
//             }
//             e.target.classList.add('active');
//             // findDifficulty();
//         }
//     });
// }


function displayImg(src, width, height, posX, posY, alt) {
    var img = document.createElement('img');
    img.src = src;
    img.width = width;
    if (alt == 'bird') {
        img.height = height;
    } else {

    }

    body.appendChild(img);
}


var bg;
function preload() {
    bg = loadImage('/public/assets/images/backgroundmain.png');
}

let bgs = [];
function setup() {
    createCanvas(windowWidth, windowHeight - 4);
    bgs[0] = new BG(bg, 0);
    bgs[1] = new BG(bg, width);
}

function draw() {
    for (var i = 0; i < bgs.length; i++) {
        bgs[i].show();
        bgs[i].animate();
    }
}

function BG(img, x) {
    this.img = img;
    this.x = x;
    this.speed = 3;

    this.show = () => {
        image(this.img, this.x, 0, width, height);
    }

    this.animate = () => {
        this.x -= this.speed;
        if (this.x < -width) {
            this.x = width;
        }
    }
}