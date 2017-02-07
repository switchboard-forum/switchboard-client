let http = require("http");
let net = require("net");

var client = new net.Socket();
client.connect(31337, '127.0.0.1', () => {
	console.log('Connected');
});

client.on('data', data => {
	console.log('Received: ' + data);
});

client.on('close', () => {
	console.log('Connection closed');
});

