console.log("Destructuring :D");

const student = {
    name : "Helsinki",
    age : 24,
    projects : {
        diceGame : "Two Players Dice Game Using JavaScript",
    },
}
const {name, age, projects : {diceGame}} = student;
console.log(name);
console.log(age);
console.log(diceGame);
