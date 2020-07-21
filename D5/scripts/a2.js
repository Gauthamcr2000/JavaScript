console.log("Class!");

class User{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.lucoins = 0;
        this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}
class Moderator extends User{
    constructor(name, age, email, role){
        super(name, age, email);
        this.role = role;
    }
    addcoins(user, lucoins){
        console.log(`${this.name} has added ${lucoins} coins`);
        return this;
    }
    removecoins(user, lucoins){
        console.log(`${this.name} has removed ${lucoins} coins`);
        return this;
    }
}
class Admin extends Moderator{
    addcourse(user, course){
        user.courses.push(course);
        console.log(`Admin has added ${course}`)
        return this
    }
    removecourse(user,course){
        user.courses = user.courses.filter(courses =>courses!=course);
        console.log(`Admin has removed ${course}`);
        return this;
    }
}


let user1 = new User('Fin',20,'f@gmail.com');
let user2 = new User('Micheal',22,'m@gmail.com');
let mod1 = new Moderator('Jon',25,'j@gmail.com');
let mod2 = new Moderator('Arthur',30,'a@gmail.com');
let admin = new Admin('Thomas',28,'t@gmail.com');
let users = [user1, user2, mod1, mod2, admin]

users.forEach(element =>{
    console.log(element);
});

user1.login();
user1.logout();

user2.login();
user2.logout();

mod1.login();
mod1.addcoins(user1,5);
mod1.removecoins(user1,2);
mod1.logout();

mod2.login();
mod2.addcoins(user2,14);
mod2.removecoins(user2,10);
mod2.logout();

admin.login();
admin.addcoins(user1,6);
admin.removecoins(user2,3);
admin.addcourse(user1,'Javascript');
admin.addcourse(user1,'Python');
admin.addcourse(user1,'Blockchain');
admin.removecourse(user1,'Python');
admin.addcourse(user2,'Python');

console.log(users);



