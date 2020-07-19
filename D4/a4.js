console.log("Calculator");

let operation = prompt("Type the operation to be performed among the following :\n 1.additon \n 2.subtraction \n 3.multiplication \n 4.division \n 5.squareroot \n 6.percentage","addition");
let number1 = Number(prompt("Enter the first number : ","0"));   
var number2; 
if (operation != "squareroot"){
    number2 = Number(prompt("Enter the second number : ","0"));
}
let calfun = function(){
    while (true){
        console.log(`The operation to be performed is ${operation}`);
        console.log(`Entered first number is ${number1}`);
        console.log(`Entered second number is ${number2}`);
        if (operation == "addition"){
            let add = number1 + number2;
            console.log(`Result is ${add}`);
            break;
        }else if (operation == "subtraction"){
            let sub = number1 - number2;
            console.log(`Result is ${sub}`);
            break;
        }else if (operation == "multiplication"){
            let mul = number1 * number2;
            console.log(`Result is ${mul}`);
            break;
        }else if (operation == "division"){
            let div = number1 / number2;
            console.log(`Result is ${div}`);
            break;
        }else if (operation == "squareroot"){
            let sqrt = Math.sqrt(number1);
            console.log(`Result is ${sqrt}`);
            break;
        }else if (operation == "percentage"){
            let perc = number1 / number2 * 100;
            console.log(`Result is ${perc}`);
            break;
        }else{
            console.log("There was a mistake, please enter the numbers and the operation to be performed agin :D");
            break;
        }
    }
}
calfun();