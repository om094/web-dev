//airthmatic operator 
let a = 10;
let b = 20;
console.log(a + b); // Addition: 30
console.log(a - b); // Subtraction: -10
console.log(a * b); // Multiplication: 200
console.log(a / b); // Division: 0.5
console.log(a % b); // Remainder: 10
console.log(a ** b); // Exponentiation
//unary operator
 
console.log(++a); // Unary plus: 11
console.log(--a); // Unary minus: 10

//assignment operator
let c = 5;
c += 2; // c = c + 2
console.log(c); // 7     

//comparison operator
let d = 10;
let e = 20;
console.log(d < e); // true
console.log(d > e); // false
console.log(d <= e); // true
console.log(d >= e); // false
console.log(d == e); // false
console.log(d === e); // false

//ternary operator
let age = 18;   
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"


  //logical operator
let x = true;
let y = false;
console.log(x && y); // false
console.log(x || y); // true
console.log(!x); // false  
  //working with non boolean   
  //falsy ->(and,fasle,nan,null,undefined) 
  //truthy 
  //short circuiting:-values
  //(false||true||false||true) -> true
   

//bitwise operator
//and, or, xor(^ ), not(), left shift(<<), right shift(>>)
console.log(5 & 3); // Bitwise AND: 1
console.log(5 | 3); // Bitwise OR: 7
console.log(5 ^ 3); // Bitwise XOR: 6
console.log(~(0)); // Bitwise NOT: -1
console.log(5 << 1); // Left Shift: 10
console.log(5 >> 1); // Right Shift: 2
  
//conditionals


 let age1 = 20;
 if(age1>=18){
  console.log("You are eligible to vote.");

 }
else{
  console.log("You are not eligible to vote.");
 }
//switch case
let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day"); 
}
