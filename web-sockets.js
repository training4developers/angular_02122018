const ws = require('ws');

const wsPort = 3030;

const wss = new ws.Server({
	port: wsPort
}, () => {
	console.log(`web socket server started on port ${wsPort}`);
});

wss.on('connection', ws => {

	console.log(`web socket connection opened on port ${wsPort}`);

	let counter = 0;
	let handle;

	ws.on('close', () => {
		console.log(`web socket connection closed on port ${wsPort}`);
		clearInterval(handle);
	});

	handle = setInterval(() => {
		ws.send(JSON.stringify(counter++));
	}, 500);

});
