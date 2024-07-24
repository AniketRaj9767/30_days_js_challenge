//LOPPS
// Task1:Print Numbers from 1 to 10 using a foor loop
for(i=0; i<=10; i++){
    console.log(i);
}

//Task2:Print the multiplication tabble of 5
for(let i =1; i<=10; i++){
     console.log("5 x " + i + " = " + (5*i));
}

//Task3:To calculate sum of numbers from 1 to 10 using while loop
let sum = 0;
let i = 1;
while (i<=10) {
    sum += i;
    i++;
}
console.log("The sum of numbers from 1 to 10 is : " + sum);

//Task4:Print the number from 10 to 1 by using while loop
let a = 10;
while (i>=1) {
    console.log(a);
    a--;  
}

//Task5:Print numbers from 1 to 5 using do..while
let num = 1
do {
    console.log(num);
    num++
}while(num<=5)

//Task6:To calculate the factorial of a number using do..while loop
let number = 3; 
let result = number;
if(number === 0 || number === 1){
    result = 1;
}else{

do {
    number--;
  result *= number;
} while (number > 1);
}
console.log(`The factorial is ${result}`);
//To print the '*' in increasing order
/** 
* *
* * *
* * * *
* * * * *    */

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}


