const booksDb = [
    {
        id: 1,
        title: 'Clean code'
    },
    {
        id: 2,
        title: 'The pragmatic programmer'
    },
    {
        id: 3,
        title: 'Web development with Node.js'
    }
]

function getBookById (id, callback) {
    const book = booksDb.find(book => book.id === id);
    if (!book) {
        const error = new Error();
        error.message = 'Book not found!';
        return callback(error);
    }

    callback(null, book);
}

getBookById(1, (err, book) => {
    if (err) {
        return console.log(err.message);
    }

    return console.log(book);
})