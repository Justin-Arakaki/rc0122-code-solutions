const books = [
  {
    isbn: '1111-1111',
    title: 'Book One',
    author: 'Author One'
  },
  {
    isbn: '1111-2222',
    title: 'Book Two',
    author: 'Author Two'
  },
  {
    isbn: '1111-3333',
    title: 'Book Three',
    author: 'Author Three'
  }
];
const booksJSON = JSON.stringify(books);
const fancyString = '{"id":123456789,"name":"Jason J. Son"}';
const fancyJSON = JSON.parse(fancyString);
console.log('books', books);
console.log('books type', typeof books);
console.log('books json', booksJSON);
console.log('books JSON type', typeof booksJSON);
console.log('fancyString', fancyString);
console.log('fancyString type', typeof fancyString);
console.log('fancyJSON', fancyJSON);
console.log('fancyJSON type', typeof fancyJSON);
