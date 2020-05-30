var colors= generateRandomColors(6);
var numSquares=6;
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors= generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < square.length/2 ; i++){
        square[i].style.backgroundColor= colors[i];
    }
    for(var i=square.length/2 ; i< square.length; i++){
        square[i].style.display= "none";
    }

    h1.style.backgroundColor = null;
    messageDisplay.textContent = "";
    messageDisplay.style.backgroundColor = "";
    messageDisplay.style.color = "";
    resetButton.textContent="New Colors";
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors= generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=square.length/2 ; i< square.length; i++){
        square[i].style.display= "block";
    }
    for(var i = 0; i < square.length ; i++){
        square[i].style.backgroundColor= colors[i];
    }
    h1.style.backgroundColor = null;
    messageDisplay.textContent = "";
    messageDisplay.style.backgroundColor = "";
    messageDisplay.style.color = "";
    resetButton.textContent="New Colors";
});


resetButton.addEventListener("click", function(){
    colors= generateRandomColors(numSquares);
    pickedColor = pickColor();
    this.textContent="New Colors";
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor= colors[i];
    }
    h1.style.backgroundColor = null;
    messageDisplay.textContent = "";
    messageDisplay.style.backgroundColor = "";
    messageDisplay.style.color = "";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < square.length; i++){
    square[i].style.backgroundColor= colors[i];

    // add click listeners to square
    square[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            messageDisplay.style.backgroundColor = "green";
            messageDisplay.style.color = "white";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }else{
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try Again";
            messageDisplay.style.backgroundColor = "red";
            messageDisplay.style.color = "white";
        }
    });
}


function changeColors(color){
    //loop through all squares change to match given color
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor= color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr =[];

    for( var i=0; i<num; i++){
        arr[i]= randomColor();
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

