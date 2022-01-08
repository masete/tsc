"use strict";
// Basic types
let id = 5;
let company = 'Manic media';
let IsPublished = true;
let x = 'hello';
// arrays
let ids = [1, 3, 4, 9];
let arr = ['nick', 5, true];
// tuple
let person = [12, 'Nick', true];
// array of tuples
let employee;
employee = [[12, 'james'],
    [13, 'dan'],
    [87, 'gerald']];
// unions
let pid;
pid = 22;
// enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.up);
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.up);
const user = {
    id: 1,
    name: "Nich"
};
// type assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//functions
function Addnum(x, y) {
    return (x + y);
}
console.log(Addnum(1, 2));
//void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Nich"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(123);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'brad traversy');
const mike = new Person(2, 'Nicholas Masete');
console.log(brad, mike);
// subclass
class Employee extends class Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
} {
}
const emp = new Employee(3, 'john', 'developer');
console.log(emp.john);
