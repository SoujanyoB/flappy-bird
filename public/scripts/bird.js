function Bird(img) {
    this.img = img;
    this.y = height / 2;
    this.x = width / 2 - 25;
    this.velocity = 0;
    this.r = 37;

    this.imgWidth;
    this.imgHeight;


    if (width >= 450) {
        this.lift = -15;
        this.gravity = 0.3;
        this.imgWidth = 50;
        this.imgHeight = 40;
    } else {
        this.lift = -14;
        this.gravity = 0.3;
        this.imgWidth = 80;
        this.imgHeight = 60;
    }

    this.score = 0;

    this.show = function () {
        // ellipse(this.x, this.y, 30, 30);
        image(this.img, this.x, this.y, this.imgWidth, this.imgHeight);
    }

    this.falling = function () {
        this.velocity += this.gravity;
        this.velocity += 0.09;
        this.y += this.velocity;

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

    }

    this.up = function () {
        this.velocity += this.lift;
        this.y += this.velocity;
    }

    this.updateScore = function (pipe) {
        if (pipe.x + pipe.pipeWidth < this.x && pipe.currentPipe) {
            this.score++;
            pipe.currentPipe = false;
            // console.log(this.score);
        }
    }

    this.drop = function (img) {
        this.img = img;
        if (width >= 450) {
            this.imgWidth = 40;
            this.imgHeight = 50;
        } else {
            this.imgWidth = 60;
            this.imgHeight = 80
        }
        this.velocity = 0;
        this.gravity = 0.7;
        this.falling();
    }

}