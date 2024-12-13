const http = require('http');
const fs = require('fs');
const path = require('path');

// Початковий стан квадратів
let greenBox = { text: 'Зелений', color: 'green' };
let redBox = { text: 'Червоний', color: 'red' };

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    // Віддаємо HTML-контент
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html lang="uk">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Практичне завдання</title>
      </head>
      <body>
        <script src="/script.js" defer></script>
      </body>
      </html>
    `);
  } else if (req.url === '/script.js' && req.method === 'GET') {
    // Віддаємо клієнтський JavaScript
    const scriptPath = path.join(__dirname, 'script.js');
    fs.readFile(scriptPath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(content);
      }
    });
  } else if (req.url === '/swap-colors' && req.method === 'GET') {
    // Міняємо кольори квадратів місцями
    const temp = greenBox;
    greenBox = redBox;
    redBox = temp;

    // Відправляємо оновлені кольори
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ green: greenBox, red: redBox }));
  } else {
    // 404 Not Found для інших запитів
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
