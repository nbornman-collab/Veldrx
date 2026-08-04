const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve the HTML
const htmlPath = path.join(__dirname, 'glasshouse.html');
const html = fs.readFileSync(htmlPath, 'utf8');

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

app.get('/glasshouse.html', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Glasshouse running on port ${port}`);
});
