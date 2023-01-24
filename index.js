let counterH = 0
let counterG = 0

function increment1h() {
    counterH+= 1;
    document.getElementById("points-home").innerHTML = counterH;
}

function increment2h() {
    counterH+= 2;
    document.getElementById("points-home").innerHTML = counterH;
}

function increment3h() {
    counterH+= 3;
    document.getElementById("points-home").innerHTML = counterH;
}

function increment1g() {
    counterG+= 1;
    document.getElementById("points-guest").innerHTML = counterG;
}

function increment2g() {
    counterG+= 2;
    document.getElementById("points-guest").innerHTML = counterG;
}

function increment3g() {
    counterG+= 3;
    document.getElementById("points-guest").innerHTML = counterG;
}

function resetGame() {
    counterH = 0;
    counterG = 0;
    document.getElementById("points-guest").innerHTML = counterG;
    document.getElementById("points-home").innerHTML = counterH;
    
}