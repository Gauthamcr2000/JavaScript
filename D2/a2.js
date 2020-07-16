console.log("Methods for Strings:");

let a = "Welcome to Javascript";
console.log(a.slice(0,7));

let b = "There is a train to Mumbai at 4:00PM";
console.log(b.replace("Mumbai","Chennai"));

let c = "Hi!";
console.log(c.repeat(3));

let d = "   I am in Bangalore   "
console.log(d);
let e = d.trim();
console.log(e);

let f = "Where are you going?";
console.log(f.substring(6,9));

let g = "I like to travel";
console.log(g.includes("to"));
let h = "I love travelling";
console.log(h.includes("to"));

let i = "I"
let j = "am going to sleep"
console.log(i.concat(j));

console.log("Methods for Arrays:");

let k = ["cycle","bike"];
console.log(k);
let l = ["car","bus"];
console.log(l);
let m = k.concat(l);
console.log(m);

let n = ["apple","mango","grapes","orange"];
console.log(n);
let o = n.copyWithin(2,0);
console.log(o);

let p = ["Bangalore","Mumbai","Chennai"];
console.log(p);
let q = p.fill("Delhi");
console.log(q);

let r = ["Bangalore","Mumbai","Delhi"];
console.log(r);
let s = r.reverse();
console.log(s);

let t = [1,2,4,6,7,9];
console.log(t);
let even = t.slice(1,4);
console.log(even);

let u = [1,3,5,6,8];
console.log(u);
let removed = u.splice(3,2,7,9);
console.log(removed);
console.log(u);

let v = ["Karnataka","Maharashtra","Sikkim","Andhra"];
console.log(v);
console.log(v.sort());

