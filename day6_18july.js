//Task1:Create an array of numbers form 1 to 5 and log the array to the console
const arr = [1,2,3,4,5]
// console.log(arr);

//Task2:Access the first and the last element of the array and log them to the console
let firstElement = arr[0]
let lastElement = arr[arr.length - 1]

// console.log(firstElement);
// console.log(lastElement);

//Task3:Use the 'push' method to add a new number to the end of the array and log the updated array
const Addarr = arr.push(6)
// console.log(Addarr);
// console.log(arr);

//Task4:use the 'pop' method to remove the last element form the array and log the updated array
// console.log(arr.pop());
// console.log(arr);

//Task5:Use the 'shift' method to remove the first element from the array and log the updated array
const removeFrstElmt = arr.shift();
// console.log(removeFrstElmt);
// console.log(arr);

//Task6:Use the 'unshift' method to add a new number to the begining of the array and log the updated array
const addNewElmnt = arr.unshift(0);
// console.log(addNewElmnt);
// console.log(arr);

//Task7:Use the 'map' method to create a new array where each number is doubled and log the new array
const arr1 = [2,3,7,9]
// let newArr = arr1.map((x) => x*2)

// console.log(newArr);

//Task8:Use the 'filter' method to create a new array with only even numbers and log the new array
const arr2 = [2,3,4,5,6,7,8,9,10]
const onlyEvenNo = arr2.filter((arr2) => arr2%2===0);
// console.log(onlyEvenNo);

//Task9:Use the 'reduce' method to calculate the sum of all numbers in the array and log the result 
let sumOfArr = arr2.reduce((accumulator, currentValue) => accumulator + currentValue)
// console.log("The sum of all numbers in the array is " + sumOfArr );

//Task10:Use a foor loop to iterate over the array and log each element to the console
let arr3 = [1,2,3,4,5]
for(i=0; i<arr3.length; i++){
    // console.log(arr3[i]);
}

//Task11:Use the 'forEach' method to iterate over the array and log each element to the console
let arr4 = [2,3,4,5,6]
arr4.forEach(function(element){
    // console.log(element);
})

//Task12:Create a two-dimensional array (matrix) and log the entire array to the console
let twoDArr = [
    [1,2,3,4],
    [10,20,30,40],
    [100,200,300,400]
];
// console.log(twoDArr);
// twoDArr.forEach(row => console.log(row));

//Task13:Access and log a specific element from the two-dimensional array
let rowIndex = 0;
let colIndex = 2;
let element = twoDArr[rowIndex][colIndex]
console.log("The element at row" + rowIndex + " and column" + colIndex + " is: " + element);
