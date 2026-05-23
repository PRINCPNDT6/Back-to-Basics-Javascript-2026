const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 2003, edition: 2007 },
  { title: "Book Four", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Five", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Six", genre: "History", publish: 1985, edition: 1996 },
  { title: "Book Seven", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Eight", genre: "Non-Fiction", publish: 2015, edition: 2020 },
];

const userBooks = []
books.forEach((book) => {
 // book.publish > 2000 && book.genre === 'History wrong method
    if(book.publish > 2000 && book.genre === 'History'){
        userBooks.push(book)
    }
})

console.log(userBooks);
