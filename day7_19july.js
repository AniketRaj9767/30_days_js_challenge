//Task1:Create an object representing a book with properties like title,author,and year and log the object to the console
// const book = {
//     BookTitle :"Eat Sleep Code Repeat",
//     author : "Aniket Raj",
//     year : 2022,

// console.log(book);

//Task2:Access and log the title and author properties of the book object
// console.log("BookTitle: " + book.BookTitle);
// console.log("author: " + book.author);

//Task3:Add a method to the book object that returns a string with the book's title and author,and log the result of calling this method
// getDeatils : function(){
//     return `Title : ${this.BookTitle} ,Author : ${this.author}`;
// },
// console.log(book.getDeatils());

//Task4:Add a method to the book object that takes a parameter(year) and updates the book's year property,then log the uodated object.
// updateYear : function(newYear) {
//     this.year = newYear
// }
// };
// book.updateYear(2024);
// console.log("Updated book year:" , book);

//Task5:Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console
// const Library = {
//     name : "Kohinoor Library",
//     Place : "Pune",
//     books : [
//         {
//             title: " Clean Code",
//             Author: "Robert C. Martin ",
//             Year: 1980
//         },
//         {
//             title: " The Mythical Man-month",
//             Author: "By Frederick Brooks ",
//             Year: 1986
//         },
//         {
//             title: " The Pragmatic Programmer",
//             Author: "Andrew Hunt and David Thomas",
//             Year: 1974
//         },
//         {
//             title: " Eat Sleep Code Repeat",
//             Author: "Aniket Raj",
//             Year: 2024
//         }
//     ]
// }
// console.log(Library);

//Task6:Access and log the name of the library and the titles of all the books in the library
// console.log(library.name);
// console.log(library.Place);
// console.log("Book Titles:");
// library.books.forEach(books => console.log(books.title))

//Task7:Add a method to the book object that uses the 'this' keyboard to return a string with the book's title and year,and log the result of calling this method.
// const library = {
//         name : "Kohinoor Library",
//         Place : "Pune",
//         books : [
//             {
//                 title: " Clean Code",
//                 Author: "Robert C. Martin ",
//                 Year: 1980,
//                 getTitleYearAndAuthor: function(){
//                     return `Title: ${this.title}, Year: ${this.Year}, Author: ${this.Author}`
//                 }
//             },
//             {
//                 title: " The Mythical Man-month",
//                 Author: "By Frederick Brooks ",
//                 Year: 1986,
//                 getTitleYearAndAuthor: function(){
//                     return `Title: ${this.title}, Year: ${this.Year}, Author: ${this.Author}`
//                 }
//             },
//             {
//                 title: " The Pragmatic Programmer",
//                 Author: "Andrew Hunt and David Thomas",
//                 Year: 1974,
//                 getTitleYearAndAuthor: function(){
//                     return `Title: ${this.title}, Year: ${this.Year}, Author: ${this.Author}`
//                 }
//             },
//             {
//                 title: " Eat Sleep Code Repeat",
//                 Author: "Aniket Raj",
//                 Year: 2024,
//                 getTitleYearAndAuthor: function(){
//                     return `Title: ${this.title}, Year: ${this.Year}, Author: ${this.Author}`
//                 }
//             }
//         ]
//     }
// library.books.forEach(books => console.log(books.getTitleYearAndAuthor()))

//Task8:Use a 'foor...in' loop to iterate over the properties of the book object and log each property and its value
// let book = {
//     title: " Clean Code",
//                 Author: "Robert C. Martin ",
//                 Year: 1980,
                // getTitleYearAndAuthor: function(){
                //     return `Title: ${this.title}, Year: ${this.Year}, Author: ${this.Author}`
                // }
// }

// for(let property in book){
//     if(book.hasOwnProperty(property)){
//         // console.log(`${property}: ${book[property]}`);

//     }
// }

//Task9:Use'Object.keys' and 'object.values' methods to log all the keys and values of the book object
// console.log("keys:", Object.keys(book))
// console.log("values:", Object.values(book))