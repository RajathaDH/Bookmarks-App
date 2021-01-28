const fs = require('fs').promises;
const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'hello' });
});

app.post('/new', async (req, res) => {
    const { url, name } = req.body;

    const newBookmark = {
        url,
        name
    };

    const fileData = await fs.readFile('public/bookmarks.json', 'utf-8');
    const jsonData = JSON.parse(fileData);
    const bookmarks = jsonData.bookmarks;

    bookmarks.push(newBookmark);

    await fs.writeFile('public/bookmarks.json', JSON.stringify(jsonData));

    res.redirect('/');
});

const PORT = 5454; 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));