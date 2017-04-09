require("babel-register")({
  presets: ["react"]
});

let express = require("express");
let net = require("net");
let React = require("react");
let ReactDOMServer = require("react-dom/server");

let config = require("./config.json");
let Component = require("./Component.jsx");

let client = new net.Socket();

client.connect(config.tcp.port, '127.0.0.1', () => {
  console.log('Connected');
});

client.on('data', data => {
  console.log('Received: ' + data);
});

client.on('close', () => {
  console.log('Connection closed');
});

let server = express();

server.get('/', (request, response) => {
  const html = ReactDOMServer.renderToString(
    React.createElement(Component)
  );
  response.send(html);
});

server.listen(config.http.port);
