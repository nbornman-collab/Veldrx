const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/practice', (req, res) => res.type('html').send(fs.readFileSync(path.join(__dirname, 'practice.html'), 'utf8')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`VeldRx running on ${PORT}`));
