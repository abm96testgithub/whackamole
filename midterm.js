var score = 0;
var moleX;
var moleY;
var time = 0;
var counter = 30;
var startTime;
var timerOn = false;
var locationX = [110, 260, 410];
var locationY = [95, 245, 395];

function setup() {
    
    var canvas = createCanvas(520,480);
    drawMole(110, 95);
    
    canvas.parent('sketch-holder');
}

    function draw() {
        background("#d3ffe9");

        drawMoleHoles();
        
        fill("#fff");
        ellipse(moleX, moleY, 100, 100);

        moveMole();
    }

    function drawMoleHoles () {

        noStroke();
        fill("#ffeeb9");

        //top left
        var mole1 = rect(50, 35, 120, 120);
        //top center
        var mole2 = rect(200, 35, 120, 120);
        //top right
        var mole3 = rect(350, 35, 120, 120);
        //middle left
        var mole4 = rect(50, 185, 120, 120);
        //middle center
        var mole5 = rect(200, 185, 120, 120);
        //middle right
        var mole6 = rect(350, 185, 120, 120);
        //bottom left
        var mole7 = rect(50, 335, 120, 120);
        //bottom center
        var mole8 = rect(200, 335, 120, 120);
        //bottom right
        var mole9 = rect(350, 335, 120, 120);
    }

    function drawMole (posX, posY) {
        moleX = posX;
        moleY = posY;
        moleColor = color("#fff");

    }
    
    function changePosition() {
        var randomX = random(locationX);
        var randomY = random(locationY);
        moleX = randomX;
        moleY = randomY;
    }

    function moveMole() {
        time += 1/65;
        
        if ((round(time) % 2) === 0) {
            changePosition();
            time++;
        }
    }

    function mousePressed() {
        var distance = dist(mouseX, mouseY, moleX, moleY);
        
        if (distance < 30) {
            time = 1;
            score++;
            changePosition();
        }
        
        document.getElementById('playerScore').innerHTML = score;
    }

    function startGame() {
        
        document.getElementById('sketch-holder').style.display = "block";
    }



    function countdown () {
        var startCountdown = setInterval(function(){
            document.getElementById('timerVar').innerHTML = counter + "s";
            counter--;

            if (counter < 0) {
                clearInterval(startCountdown);
                document.getElementById('sketch-holder').style.display = "none";
                document.getElementById('startButton').innerHTML = "Reset";
            }
        }, 1000)
    }
    function startTimer() {
        
        if (timerOn === false) {
            timerOn = true;
            countdown();
        }
    }