// Basic types
let id: number = 5
let company: string = 'Manic media'
let IsPublished: Boolean = true
let x: any = 'hello'

// arrays
let ids: number[] = [1,3,4,9]
let arr: any[] = ['nick', 5, true]

// tuple
let person: [number, string, boolean] = [12, 'Nick', true]

// array of tuples
let employee: [number, string][] 

 employee = [[12, 'james'], 
[13, 'dan'], 
[87, 'gerald']]

// unions
let pid: string | number

pid = 22 

// enums
enum Direction1 {
    up = 1,
    down,
    left,
    right
}

console.log(Direction1.up)

enum Direction2 {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}

console.log(Direction2.up)

// objects
type User = {id: number,
name: string}

const user: User = {
    id: 1,
    name: "Nich"
}

// type assertion
let cid : any = 1
// let customerId = <number>cid
let customerId = cid as number

//functions
function Addnum(x: number , y: number): number{
    return (x + y)
}

console.log(Addnum(1, 2))

//void
function log(message : string | number) { 
    console.log(message)
}

// interfaces
interface Userinterface {
    id: number,
    name: string,
    age?: 23
}
    
const user1: Userinterface = {
    id: 1,
    name: "Nich"
}


interface MathFunc {
    (x: number, y: number) :number
}

const add: MathFunc = (x: number , y: number): number => x + y
const sub: MathFunc = (x: number , y: number): number => x - y

