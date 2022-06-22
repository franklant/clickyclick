//It's running..
console.log("Just for Fun");

//js... LET IT BE ZERO, DANG IT.
let amount_clicked = 0;

//Keep it clean
let button = document.getElementById("myButton");
let text = document.getElementById("myText");
let comments = document.getElementById("myComments");

button.onclick = function() {

    //Raise them digits. LOG IT.
    amount_clicked += 1;
    console.log(amount_clicked);

    //Reminder to Keep Clicking!
    button.innerHTML = "Keep Clicking";

    //Perfect English.
    if (amount_clicked == 1) {
        text.innerHTML = amount_clicked + " click";
    } else {
        text.innerHTML = amount_clicked + " clicks";
    }
    
    //Button Intenity
    if (amount_clicked >= 50 && amount_clicked < 100) 
    {
        button.innerHTML = "DO NOT STOP";
    } else if (amount_clicked == 100) {
        button.innerHTML = "HAHAHAHA";
    } else if (amount_clicked > 100 && amount_clicked < 180) {
        button.innerHTML = "??????";
    } else if (amount_clicked >= 180) {
        button.innerHTML = "....ERR....";
    }

    //Commentary.
    if (amount_clicked == 10) {
        comments.innerHTML = "This is Getting Interesting..";
    } else if (amount_clicked == 30) {
        comments.innerHTML = "We're Getting Somewhere";
    } else if (amount_clicked == 50) {
        comments.innerHTML = "You Heard the Button..";
    } else if (amount_clicked == 70) {
        comments.innerHTML = "I'm Feeling Something..";
    } else if (amount_clicked == 90) {
        comments.innerHTML = "Just a Little More..";
    } else if (amount_clicked == 100) {
        comments.innerHTML = "Nice...";
        window.open("audio/CompletelyOriginal.mp4");
    } else if (amount_clicked == 101) {
        comments.innerHTML = "Oh? Back for More?..";
    } else if (amount_clicked == 120) {
        comments.innerHTML = "You Can Stop Now..";
    } else if (amount_clicked == 140) {
        comments.innerHTML = "Clicking Won't Do Anything..";
    } else if (amount_clicked == 160) {
        comments.innerHTML = "Don't Waste Your Time.."
    } else if (amount_clicked == 180) {
        comments.innerHTML = "Fine.. Keep it Up.."
    } else if (amount_clicked == 200) {
        comments.innerHTML = "You Can Leave Now."
        window.open('audio/NoMore.mp4');
        button.remove();
    }
}
