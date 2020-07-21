console.log("Hi!!!");

var arr = []
while (true){
    var i = Number(prompt("Enter the number : ",0));
    if (i > 0){
        arr.push(i);
    }else{
        break;
    }
}
console.log(arr);
let odd = arr.filter(i => i % 2 != 0);
console.log(odd);
let oddcubes = odd.map(i => i ** 3);
console.log(oddcubes);
