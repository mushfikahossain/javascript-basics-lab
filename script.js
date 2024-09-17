//Part 1: Declare and Use Variables
console.error("Part 1: Declare and Use Variables")


//declaring variables
let studentName = "John";
let studentAge = 18;
let isEnrolled = true;

//printing
console.log(`Student's name is ${studentName}`)
console.log(`Student's age is ${studentAge}`)
console.log(`Student's enrollment status is ${isEnrolled}`)

//Part 2: Demonstrate Data Types
console.error("Part 2: Demonstrate Data Types")

//string
const stringExample = "Hello World";

//number
var numberExample = 7;

//boolean
let booleanExample = false;

//array
let arrayExample = ['Apple', 'Banana', 'Cherry'];

//object
const objectExample = {age: 18, name: "John", enrolled: "yes"};

console.log(`This is an example string: ${stringExample}`)
console.log(`This is an example number: ${numberExample}`)
console.log(`This is an example boolean: ${booleanExample}`)
console.log("This is an example array:")
console.log(arrayExample)
console.log("This is an example object:")
console.log(objectExample)

//Part 3: Use Basic Operators
console.error("Part 3: Use Basic Operators")

console.log("Arithmic Operators")
//arithmic operators
console.log("2 + 9 =", 2+9)//addition
console.log("7 - 3 =", 7-3)//subtraction
console.log("5 * 4 =", 5*4)//multiplication
console.log("16 / 8 =", 16/8)//division

console.log("Comparison Operators")
//comparison operators
console.log("2 > 1 =", 2>1) //greater than
console.log("10 < 3 =", 10<3) //less than
console.log("5 == 5 =", 5==5) //equal to
console.log("9 == 7 =", 9==7) //equal to
console.log("8 != 6 =", 8!=6) //not equal to
console.log("4 != 4 =", 4!=4) //not qeual to

console.log("Logical Operators")
//logical operators

let a = true;
let b = false;

console.log("AND operator (true && false): ", a && b)
console.log("OR operator (true || false): ", a || b)
console.log("NOT Operator (!true): ", !a)
console.log("NOT Operator (!false): ", !b)

