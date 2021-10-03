const booksDb = [
    {
        id: 1,
        title: 'Clean code',
        authorId: 1,
    },
    {
        id: 2,
        title: 'The pragmatic programmer',
        authorId: 2,
    },
    {
        id: 3,
        title: 'Web development with Node.js',
        authorId: 3,
    }
]

const authorsDb = [
    {
        id: 1,
        name: 'Robert C. Martin'
    },
    {
        id: 2,
        name: 'Steve Forest'
    }
]

function getBookById (id) {
    return new Promise((resolve,reject) => {
        const book = booksDb.find(book => book.id === id);
        if (!book) {
            const error = new Error();
            error.message = 'Book not found!';
            reject(error);
        }
        resolve(book);
    })
}

function getAuthorById (id) {
    return new Promise((resolve, reject) => {
        const author = authorsDb.find(author => author.id === id);
        if (!author) {
            const error = new Error();
            error.message = 'Author not found!';
            reject(error);
        }
        resolve(author);
    })
}

getBookById(3)
    .then(book => {
        return getAuthorById(book.authorId);
    })
    .then(author => {
        console.log(author.name);
    })
    .catch(error => {
        console.log(error.message);
    });