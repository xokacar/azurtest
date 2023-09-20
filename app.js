const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Sa Azure DevOps!');
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`server bu portta ${port}`);
});
