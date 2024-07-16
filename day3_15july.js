//Task1:Check the no is positive or negative
let num = 0
if(num > 0){
    // console.log(num + " is Positive no");
}else if(num < 0){
    // console.log(num + " is negative no");
}else{
    // console.log("Zero");
}

//Task2:Ccheck a person is eligible to vote 
let age = 16
if(age >= 18){
    // console.log("The person is eligible to vote");
}else{
    // console.log("This person is not eligible to vote");
}

// Task3:Find the largest of three numbers using nested if-else statement
let n1 = 11
let n2 = 10
let n3 = 18
if(n1>n2 && n1>n3){
    console.log(n1 + " is the greatest");
}else if(n2>n3 && n2>n1){
    console.log(n2 + " is the greatest");
}else{
    console.log(n3 + " is the greatest");
// }
// if(n1 > n2){
//     console.log(n1+" is greater than " +n2);
// }else if(n2 >n3){
//     console.log(n2+" is greater than " +n3);
// }else(n1 > n3);{
//     console.log(n1+" is greater than " +n3);
// }

// if(n1>n2){
//         if(n1>n3){
//             console.log(n1);
//         }
// }
// else if(n2>n3){
//         console.log(n2);
// }else{
//     console.log(n3);
// }

//Task4:Print the days of the week with the help of switch case
let Today = 5
switch(Today){
    case 1:
        console.log(Today+"th day is Monday");
        break;
    case 2:
        console.log(Today+"th day is Tuesday");
        break;
    case 3:
        console.log(Today+"th day is Wednesday");
        break;
    case 4:
        console.log(Today+"th day is Thursday");
        break;
    case 5:
        console.log(Today+"th day is Friday");
        break;
    case 6:
        console.log(Today+"th day is Saturday");
        break;
    case 7:
        console.log(Today+"th day is Sunday");
    default:
        console.log("Invalid Day Number");
}

//Task5:To assign Grade("A,B,C,D,F") based on scores
let grade;
let score = 50

switch ( true ) {
  case ( score >= 90 && score <= 100 )  :
    grade = "A"
    break;
  case ( score >= 80  && score <= 90 ) : 
    grade = "B"
    break
  case ( score >= 70 && score <= 80 ):
    grade = "C"
    break
  case ( score >= 60 && score <= 70 ):
    grade = "D"
  case ( score >= 50 && score <= 60 ) :
    grade = "F"
    break
  default:
    grade = "Non Gradeable"
    console.log(score)
    break;
}
console.log(grade)
//Task6:To check no is even or odd with the use of ternary operator
let Num = 11
const result = (Num % 2 ===0) ?  "Even No" : "Odd No"
console.log(Num + " is " + result);

//Task7:Check year is leap year or not 
let year = 2020
if(year % 4 ===0){
    if(year % 100 ===0){
        if(year % 400 ===0){
            console.log(year + " is a leap year");
        }else{
            console.log(year + " is not a leap year");
        }
    }else{
        console.log(year + " is a leap year");
    }
}else{
    console.log(year + " is not leap year");
}
}