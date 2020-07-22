console.log("Displaying message on webpage");

const name = prompt("Enter your name : ","Anonymous");
message.innerText += `Welcome to this webpage ${name}`

const dtime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    dtime.innerText = time;
}
setInterval(clock,1000);

const attr = document.getElementById("a3");
attr.classList.toggle('bgBlack');
document.body.style.color = 'white';