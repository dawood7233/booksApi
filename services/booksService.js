const books = [
  { id: 1, name: "English" },
  { id: 2, name: "Math" },
  { id: 3, name: "Urdu" },
  { id: 4, name: "chemistry" },
];
module.exports = {
  getbooks: (data) => {
    return books;
  },
  updatebook: (id, data) => {
    const book = books.find((c) => c.id === parseInt(id));
    if (!book) {
      return "The book was not found through the given id.";
    } else {
      book.name = data.name;
      return book;
    }
  },
  deletebook: (id, data) => {
    const book = books.find((c) => c.id === parseInt(id));
    if (!book) {
      return "The book was not found through the given id.";
    } else {
      const index = books.indexOf(books);
      books.splice(index, 1);
      return book;
    }
  },
  addbook: (id, data) => {
    const book = {
      id: books.length + 1,
      name: data.name,
    };
    books.push(book);
    return book;
  },
};
