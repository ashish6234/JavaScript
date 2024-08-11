
//- ACTIVITY 1
//? TASK 1 - OBJECT TO CREATE BOOK PROPERTY LIKE TITLE, AUTHOR AND YEAR

const bookPro = {
    title: "Harry Potter",
    author: "Ashish",
    year: 1997
}

console.log(bookPro);
console.log(typeof(bookPro));

//? TASK 2 - OBJECT TO CREATE BOOK ACCESS THEM NOW LIKE TITLE, AUTHOR AND YEAR

console.log(bookPro.title);
console.log(bookPro.year);
console.log(bookPro.author);

//- ACTIVITY 2
//? TASK 3 - Create a book object Method to return a string with the book's title and author


const book = {
    title: "To Kill a Mockingbird", 
    author: "Harper Lee",
    year: 1960,

    getBookInfo: function () {
        return `${this.title} by ${this.author}`;
    }
};

console.log(book.getBookInfo());

//? TASK 4 - Method to update the year of the book


const bookYear = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,          

    getBookInfo: function () {
        return `${this.title} by ${this.author}`;
    },

    updateYear: function (newYear) {
        this.year = newYear;
    }
};

console.log(bookYear.getBookInfo()); 

bookYear.updateYear(2021);

console.log(`The book was updated in the year: ${bookYear.year}`);


//- ACTIVITY 3
//? TASK 5 - nested object create a nested object representing a library with properties like name and books (an array of book objects)


const library = {
    name: "cityLibrary",
    books:[
        {
            title:"To Kill a MockingBird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        }
    
    ]
};


console.log(library);

//? Task 6 Access the title of book

const libraryBookTitle = library.books[0].title

console.log(libraryBookTitle);

library.books.forEach((book) => {
    console.log(book.title);
});


//- ACTIVITY 4
//? TASK 7 - create a object using this keyword to return a string with the book title and year
const bookyearTitle = {
    titleOne: "1984",
    authorIs: "George Orwell",
    yearOf: 1949,
    getBookDetailsOne() {
        return `${this.titleOne} was written in ${this.yearOf}`;
    }
};

console.log(bookyearTitle.getBookDetailsOne());


//- ACTIVITY 5
//? TASK 8 -  for...in Loop to Iterate Over Properties

const bookForin = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};

for (let key in bookForin) {
    console.log(`${key}: ${bookForin[key]}`);
}


//? TASK 9 -Object.keys and Object.values Method to Log All Keys and Values

// Using Object.keys to get all keys
const keys = Object.keys(book);
console.log("Keys:", keys);  
// Using Object.values to get all values
const values = Object.values(book);
console.log("Values:", values);  

