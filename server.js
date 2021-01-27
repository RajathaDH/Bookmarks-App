const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({ message: 'hello' });
});

const PORT = 5454;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));