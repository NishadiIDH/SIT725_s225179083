// Import the service
const booksService = require('../services/booksService');

// Controller uses the service to get data
exports.getAllBooks = async (req, res, next) => {
  try {
  const items = await booksService.getAllBooks();
  res.json({
    status: 200,
    data: items,
    message: 'Books retrieved successfully'
  });
} catch (err) {
  next(err);
}
};

exports.getBookById = async (req, res, next) => {
  try {
  const book = await booksService.getBookById(req.params.id);

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
  } catch (err) {
  next(err);
}
};