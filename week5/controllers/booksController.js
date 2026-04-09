// Import the service
const booksService = require('../services/booksService');

// Controller uses the service to get data
exports.getAllBooks = (req, res) => {
  const items = booksService.getAllBooks();
  res.json({
    status: 200,
    data: items,
    message: 'Books retrieved successfully'
  });
};

exports.getBookById = (req, res) => {
  const book = booksService.getBookById(req.params.id);

  if (!book) {
    return res.status(404).json({
      status: 404,
      message: 'Book not found'
    });
  }

  res.json({
    status: 200,
    data: book,
    message: 'Single book retrieved'
  });
};