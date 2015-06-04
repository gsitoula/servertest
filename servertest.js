var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-Type' : "text/html"
	});

	var stream = fs.createReadStream('xp.html');
	stream.pipe(res);

});
server.listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP, function() {
    console.log('ahora si estoy escuchando');
});