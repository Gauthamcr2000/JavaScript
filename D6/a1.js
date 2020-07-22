console.log("Hello");

var i = 0;
function change(){
    let doc = document.getElementById("a1");
    let color = ["red","blue","green","yellow","grey"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
setInterval(change, 5000);