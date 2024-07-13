/* Variables and Data Types
Tasks:Variable Declaration
Activity1:
Task1:Declare a variable using 'var' ,assign it a number,
and log the value to the console.*/ 
var number = 7246
//console.log(number);


/*Task2:Declare a variable using 'let' ,assign it a String,
and log the value to the console.*/ 
let name = "Aniket Raj"
//console.log(name);

/*Activity2: Constant Declaration
Task3:Declare a variable using 'const' ,assign it a boolean value,
and log to the console*/ 
const Aniket = "myName"
//console.log(Aniket);

/*Activity3:Data Types 
Task4:Create variables of different data types(number,string,boolean,object,,array)
and log each variables typeusing 'typeof' operator.*/ 
let num = 123
let str = "Abcd"
let isBoolean = true
let obj = {
    task1:"Eat",
    task2:"Sleep",
    task3:"code",
    task4:"Repeat",
    isDailyRoutine:true
}
let arr =[1,2,3,4]
//console.log([typeof num, typeof str, typeof isBoolean, typeof obj, typeof arr]);

/*Task5:Declare a variable using 'let',assign it an initial value
,reasign a new value and log both values to the console.*/ 

let initValue = "Initial Value"
console.log(initValue);
initValue = "Reasign Value"
//console.log(initValue);

//Task6:Try reassign a variable deckared with const and observe error
const pi = 3.14
console.log(pi);
pi = 3.14141
console.log(pi);