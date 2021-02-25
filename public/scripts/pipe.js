function Pipe(pipeTop, pipeBottom) {
    var dx, dy;
    if(width>=450) {
        this.pipeWidth = 64;
        dx = 48;
    }
    else {
        this.pipeWidth = 100;
        dx = 74;
    }
    this.x = width;
    this.top = 0;
    this.height = random(height/5, 2*height/3);
    this.spacing = 175;
    this.bottom = this.height + this.spacing;

    this.currentPipe = true;

    this.speed = -1.5;

    this.show = function() {
        fill(255);
        noStroke();
        // rect(this.x, this.top, this.pipeWidth, this.height);
        image(pipeTop, this.x, this.top, this.pipeWidth, this.height);
        // rect(this.x, this.bottom, this.pipeWidth, height-this.bottom);
        image(pipeBottom, this.x, this.bottom, this.pipeWidth, height-this.bottom);
    }

    this.move = function() {
        this.x += this.speed;
    }

    this.stopMoving = function() {
        this.speed = 0;
    }

    this.offscreen = function() {
        if(this.x < -this.pipeWidth) {
            return true;
        }
    }

    this.hits = function(bird) {
        if((bird.x+dx >= this.x) && (bird.x <= (this.x + this.pipeWidth))) {
            if(bird.y <= this.height-5|| bird.y+40 >= this.height+this.spacing + 8) {
                return true;
            }
        } else
            return false;
    }
}