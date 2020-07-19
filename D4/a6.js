console.log("Let's Begin!");

let repeat = function(){
    number = Number(prompt("Enter the number greater than 100",0));
}
repeat();
let num = (number > 100 || number == null || number == "") ? console.log(number) : repeat();
