const http = require('http');

http.createServer(function (request, response) {
    var message = "";

    response.writeHead(200,
        {
            'Content-Type': 'text/plain',
            "Access-Control-Allow-Origin":"*"
        });

    request.on('data',function (chunk)
    {
        message += chunk;
    });

    request.on('end',function () {
        response.write(message);
        response.end();
    });

    console.log(message);
}).listen(8080);