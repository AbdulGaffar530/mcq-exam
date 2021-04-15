const startingMinutes = 0 ;
let time =  startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000)

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time++;
}


// Green Button Answare
let greenBtn = document.getElementById("green");
greenBtn.addEventListener("click", function () {
	let colorGreen = document.getElementById("green");
	colorGreen.style.backgroundColor = "green";
})

// // Red Button Answare worng
// let redBtn = document.getElementById("red");
// redBtn.addEventListener("click", function () {
// 	let colorRed = document.getElementById("red");
// 	colorRed.style.backgroundColor = "red";
// })

var addStyleCss = querySelectorAll("red");
function addStyle (){
	addStyleCss.classList.add("para-style");
}