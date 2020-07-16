console.log("Everything's fine, lets proceed :D");

//Using if elseif else

/*let marks = Number(prompt("Enter the marks : ","50")); 
if (marks >= 80 && marks <= 100){
    console.log(`Marks are ${marks} and grade is A+`);
}else if (marks >=65 && marks < 80){
    console.log(`Marks are ${marks} and grade is A`);
}else if (marks >= 50 && marks < 65){
    console.log(`Marks are ${marks} and grade is B+`);
}else if (marks >= 40 && marks < 50){
    console.log(`Marks are ${marks} and grade is B`);
}else if (marks >= 35 && marks < 40){
    console.log(`Marks are ${marks} and grade is C+`);
}else if (marks < 35){
    console.log(`Marks are ${marks} and grade is C`);
}else{
    console.log("There was some mistake while entering the input, try entering again!");
}*/


//Using switch

/*let marks = prompt("Enter the marks : ","50");
switch (true){
    case (marks >= 80 && marks < 100):
        console.log(`Marks are ${marks} and grade is A+`);
        break;
    case (marks >= 65 && marks < 80):
        console.log(`Marks are ${marks} and grade is A`);
        break;
    case (marks >= 50 && marks < 65):
        console.log(`Marks are ${marks} and grade is B+`);
        break;
    case (marks >= 40 && marks < 50):
        console.log(`Marks are ${marks} and grade is B`);
        break;
    case (marks >= 35 && marks < 40):
        console.log(`Marks are ${marks} and grade is C+`);
        break;
    case (marks < 35):
        console.log(`Marks are ${marks} and grade is c`);
        break; 
    default:
        console.log("There was some mistake while entering the input, try entering again!");
}*/


//Using ternary

let marks = Number(prompt("Enter the marks : ","50"));
let result = (marks >= 80 && marks < 100) ? `Marks are ${marks} and grade is A+`:
             (marks >= 65 && marks < 80) ? `Marks are ${marks} and grade is A`:
             (marks >= 50 && marks < 65) ? `Marks are ${marks} and grade is B+`:
             (marks >= 40 && marks < 50) ? `Marks are ${marks} and grade is B`:
             (marks >= 35 && marks < 40) ? `Marks are ${marks} and grade is C+`:
             (marks < 35) ? `Marks are ${marks} and grade is C`: "There was some mistake while entering the input, try entering again!";
console.log(result);

























