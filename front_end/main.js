let angle = 90;
let output = "";

if (angle > 0 && angle < 60) {
    output = "do this exercise!";
} else if (angle >= 60 && angle < 90){
    output = "do";
} else if (angle >= 90 && angle <= 180) {
    output = "do this exercise!";
} else {
    output = "Not possible";
}

// Update HTML content
document.getElementById("output").innerText = output;
