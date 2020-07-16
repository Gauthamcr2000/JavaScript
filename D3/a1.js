console.log("Hello!");

num = Number(prompt("Enter the Number : ","0"));
let evenodd = function(){
    if (num % 2 == 0){
        console.log(`The number entered is ${num} and Number is Even`);
    }
    else{
        console.log(`The number entered is ${num} and Number is Odd`);
    }
}
evenodd();