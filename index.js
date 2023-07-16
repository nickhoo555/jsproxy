
const http = require('http');
const request = require('request');

const server = http.createServer(function(req, res) {
    const urlToProxy = new URL(req.url, `http://${req.headers.host}`).searchParams.get('url');
    // if (!urlToProxy) {
    //     res.writeHead(400, {'Content-Type': 'text/plain'});
    //     res.end('Missing url parameter');
    //     return;
    // }

    const targetUrl = new URL(urlToProxy);
    req.pipe(request({
        url: urlToProxy,
        headers: {
            'Host': targetUrl.hostname,
        },
    })).pipe(res);
});

server.listen(3000);
