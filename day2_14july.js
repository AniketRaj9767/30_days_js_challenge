let num1 = 20
let num2 = 10
//Task1:Add two numbers and log the result to the console
console.log(`The Sum of num1 and num2 is ${num1+num2}`);

//Task2:Subtract two numbers and log the result to the console 
console.log(`The Subtraction of num1 and num2 is ${num1-num2}`);

//Task3:Multiply two numbers and log the result to the console 
console.log(`The Multiplication of num1 and num2 is ${num1*num2}`);

//Task4:Divide two numbers and log the result to the console 
console.log(`The division of num1 by num2 is ${num1/num2}`);

//Task5:find remainder two numbers and log the result to the console 
console.log(`The remainder of num1 and num2 is ${num1%num2}`);

//Task6:Use the '+=' operator to adda number to a variable and log the rseult to the console
let VarNum = 15
VarNum+=1
console.log(VarNum);

//Task7:Use the '-=' operator to adda number to a variable and log the rseult to the console
VarNum-=1
console.log(VarNum);

//Task8:Use comparison operator '<' & '>'
let a = 10
let b = 20
console.log(a>b);
console.log(a<b);

//Task9:Use comparison operator '<=' & '>='
console.log(a<=b);
console.log(a>=b);

//Task10:Use comparison operator '==' & '==='
let c = 10
let d = '10'
console.log(c===d);
console.log(c==d);

//Task11:Use logical operator '&&'
console.log(a>b && a<b);

//Task12:Use comparison operator ||
console.log(a==6 || b==20);
console.log(c==10 || d==30);

//Task13:Use comparison operator !
console.log(!a==10);

//Task14:Use ternary operator to check if no is positive or negative and log the value to the console
let number = -8
let result = (number > 0) ? "Positive" : (number < 0) ? "Negative" : "Zero";
console.log(result);