let bird;
let pipes = [];
let score;
var frequency;


let spaceBarCount = true,
    spaceBarCountTouch = true;

let flappyUp, pipeTop, pipeBottom, bg, arcadeclassic;

function preload() {
    flappyUp = loadImage('/public/assets/images/flappy-bird-up.png');
    flappyDown = loadImage('public/assets/images/flappy-bird-falling.png');
    pipeTop = loadImage('/public/assets/images/pipeTop.png');
    pipeBottom = loadImage('/public/assets/images/pipeBottom.png');
    bg = loadImage('/public/assets/images/background.png');
    arcadeclassic = loadFont('/public/assets/fonts/ARCADECLASSIC.TTF');
}

function setup() {
    // put setup code here
    let canvas;
    if (windowWidth < 450) {
        frequency = 200;
        canvas = createCanvas(windowWidth, windowHeight);
    } else {
        frequency = 150;
        canvas = createCanvas(500, windowHeight - 100);
        canvas.position(windowWidth / 2 - 250, 50);
    }



    bird = new Bird(flappyUp);
    pipes.push(new Pipe(pipeTop, pipeBottom));
    noLoop();
    // reset();
}

// function reset() {
//     score = 0;
//     bird = new Bird(flappyUp);
//     pipes.push(new Pipe(pipeTop, pipeBottom));
//     noLoop();
// }

function showScore() {
    textSize(64);
    textFont(arcadeclassic);
    fill(0);
    text(bird.score, 30, 60);
}

function showbackGround() {
    image(background, 0, 0, 800, 505);
}

function draw() {
    // put drawing code here
    background(bg);
    if (frameCount % frequency == 0) {
        pipes.push(new Pipe(pipeTop, pipeBottom));
    }

    if (frameCount % 60 == 0) {
        score++;
    }
    for (var i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].move();

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }

        // console.log(pipes.length);
    }

    bird.show();
    bird.falling();
    if (bird.y > height - 25) {
        bird.velocity = 0;
        noLoop();
        createElementsDOM();
    }

    var stopEverything = false;
    if (!stopEverything) {
        for (var i = pipes.length - 1; i >= 0; i--) {
            if (pipes[i].hits && pipes[i].hits(bird)) {
                for (var j = pipes.length - 1; j >= 0; j--) {
                    pipes[j].hits = null;
                    pipes[j].stopMoving();
                }
                stopEverything = true;
                break;
            }

            bird.updateScore(pipes[i]);
        }
    }

    if (stopEverything) {
        bird.up = null;
        bird.drop(flappyDown);
    }

    showScore();
}



function keyPressed() {
    if (key === " " && spaceBarCount) {
        loop();
        spaceBarCount = false;
    } else if (key === " " && bird.y > 0 && bird.velocity >= 0) {
        if (bird.up()) {
            bird.up();
        }
    }
}

function touchStarted() {
    // console.log(Touch);
    if (Touch && spaceBarCountTouch) {
        loop();
        spaceBarCountTouch = false;
    } else if (bird.y > 0 && Touch && bird.velocity >= 0) {
        if (bird.up()) {
            bird.up();
        }
    }
}

function createElementsDOM() {
    let ul = createElement('ul', `
        <li>Score: &nbsp;&nbsp; ${bird.score}</li>
        <li><a href="/play" id="retry">Retry</li>
        <li><a href="/">Main Menu</li>
    `);

    ul.class('menu');
}
