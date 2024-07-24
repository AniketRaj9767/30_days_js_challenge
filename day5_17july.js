//Task1:write a function to check a number is even or odd
// function EvenOddNum(num){
//     if(num % 2===0){
//         console.log(num + " is Even Number");
//     }else{
//         console.log(num + " is odd Number");
//     }
// }
// EvenOddNum(3)

//Task3:function to calculate the square of a number and return the result
// function SquareNum(num){
//     console.log(num * num);
// }
// SquareNum(25)

//Task3:Function expression to to find the maximum of two number
// let findMax = function(a,b){
//     let max = a>b ? a:b
//     console.log(`The maximum of ${a} and ${b} is ${max}` );
// }
// findMax(0,-1)

//Task4:Function ecpression to concatenate two strings and return the result
// let ConcatStr = function(str1,str2){
//     return str1 + str2
// }
// let result = ConcatStr('Hello, ', 'world!');
// console.log(result);

//Task5:Write an arrow function to calcuate the sum of two numbers and return the result
// let sum = (a,b) =>{
//     let result = a+b;
//     return result;
// };
// console.log(sum(3,-4));

//Task6:Write an arrow function to check if a string contains a specific character and return a boolean value
// let checkChar = (str,char) => str.includes(char);
// let str = "Aniket Raj";
// console.log(checkChar(str, 'f'));

//Task7:Write a function that takes two parameters and return their product and provide a default value for the second parameter 
// const multi = function(a, b=4){
//     return a*b;
// }
// console.log(multi(3));

//Task8:Write a function that takes a person's name and age and return a greeting message.provide a default value for the page
// function greetMsg(name, age=40){
//     return `${name}! Bhai tu ${age} ka ho gya.`
// }
// console.log((greetMsg("Radhe")));

//Task9:Write a high-order function that takes a function and a number, and calls the function that many times
// function fncMany(fn, num){
//     for(let i=0; i<num; i++){
//         fn();
//     }
// }
// let repeatWord = function(){
//     console.log("sbka katega");
// };
// fncMany(repeatWord, 5)

//Task10:Write a high order function that takes two functions and a value, applies the first function to the value,and then applies the second function to the result.
function TwoFnc(fn1, fn2, value){
    return fn2(fn1(value))
}
function add(x){
    return x+1
}
function multi(x){
    return x * x
}
const result = TwoFnc(add,multi,8);
console.log(result);