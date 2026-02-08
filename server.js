import http from "http";

const port = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.end("Hello from CHARVI\n");
}).listen(port);

