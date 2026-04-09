const express = require('express');
const app = express();
const PORT = 3000;

// Import route file
const booksRoutes = require('./routes/books');

app.use(express.static('public'));

// Mount the route at /api/books
app.use('/api/books', booksRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Books Catalog!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});