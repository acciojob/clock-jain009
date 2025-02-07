//your JS code here. If required.

let timerDisplay = document.getElementById("timer");
let currentDate = new Date();
 setInterval (
	 function() {
		currentDate = new Date();
	 timerDisplay.innerHtml = currentDate.toLocalString();
	 
	 }, 1000;
 )