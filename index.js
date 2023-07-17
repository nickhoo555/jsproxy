
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
        // headers: {
        //     'Host': targetUrl.hostname,
        // },
    })).pipe(res);
});

server.listen(3000);

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://media.discordapp.net/attachments/1121443686501326878/1130079553398784070/starXmate_A_special_agent_162ee4e1-a903-48ef-97dc-e5d8143053e7.png?width=994&height=994',
//   'headers': {
//     'Cookie': '__cfruid=a754558bd5d30ea2f58d5cf98b21adfbf0a3cfde-1689512689'
//   }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

