var express = require("express")
const path = require('path');
var app = express()
var port = process.env.port || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// GET endpoint to calculate age from birth year
app.get('/age', (req, res) => {
    const currentYear = 2026;
    const birthYear = parseInt(req.query.year);

    // birth year is a valid number
    if (isNaN(birthYear)) {
        return res.status(400).json({ error: 'Please provide a valid birth year.' });
    }

    // check if birth year is in the future
    if (birthYear > currentYear) {
        return res.status(400).json({ error: 'Birth year cannot be in the future.' });
    }

    // check if birth year is before 1900
    if (birthYear < 1900) {
        return res.status(400).json({ error: 'Please provide a valid birth year after 1900.' });
    }

    // age calculator
    const age = currentYear - birthYear;

    // result
    res.json({ birthYear: birthYear, age: age });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});