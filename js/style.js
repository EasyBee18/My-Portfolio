const greet = new Date().getHours();
let greetings ;
if (greet < 12) {
    greetings = "Hi,Good Morning! ";
}
else if (greet < 18) {
    greetings = "Hi, Good Afternoon! ";
} else {
    greetings = "Hi, Good Evening! ";
   
}
document.getElementById("greetingText").innerText = greetings;
document.getElementById("greetingText").style.color = "#ffffff";   
document.getElementById("greetingText").style.fontSize = "2rem";
document.getElementById("greetingText").style.fontFamily = "monospace";
document.getElementById("greetingText").style.textAlign = "left";
document.getElementById("greetingText").style.textShadow = "2px 2px 4px #000000";
document.getElementById("greetingText").style.paddingTop = "5rem";

// set date and time to launch or stop countdown
const targetedDate = new Date("May 12, 2025 12:00:00").getTime();

// set the intervals 
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const periodLeft = targetedDate - now;

// time calculation for days, hours, minutes and seconds

    const days = Math.floor(periodLeft/ (1000 * 60 * 60 * 24));
    const hours = Math.floor((periodLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((periodLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((periodLeft % (1000 * 60)) / 1000);
// display your result here
    document.getElementById("timerDisplay").innerHTML =
      `${days}day ${hours}hour ${minutes}min ${seconds}sec`;

// after counter down the countdown interval is canceled and then display
      if (periodLeft < 0) {
        clearInterval(countdown);
        document.getElementById("timerDisplay").innerHTML = "Time down completed!";
       
      }
    }, 1000);
