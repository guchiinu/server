// HTTP モジュール
var http = require('http');

// ファイル モジュール
var fs = require('fs');

// URL解析 モジュール
var urlParser = require('url');

http.createServer(
	function (req, res) {
		var url = urlParser.parse(req.url, true);
		if (url.path == "/chart.html") {
			fs.readFile('chart.html','utf-8', doRead );
		
			function doRead(err, data) {
				res.writeHead(200, {"Content-Type": "text/html"});
				res.write(data);
				res.end();
			}
		} else if (url.path == "/data.json") {
			fs.readFile('data.json','utf-8', doRead );
		
			function doRead(err, data) {
				res.writeHead(200, {"Content-Type": "text/json"});
				res.write(data);
				res.end();
			}
		} else if (url.path == "/guchi.js") {
			fs.readFile('guchi.js','utf-8', doRead );
		
			function doRead(err, data) {
				res.writeHead(200, {"Content-Type": "text/javascript"});
				res.write(data);
				res.end();
			}
		} else if (url.pathname == "/write" && url.query.key == "kg") {
                       var jsonObject = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

                        var labelObject = jsonObject.data.labels;
                        var dataObject = jsonObject.data.datasets[0].data;

                        labelObject.push(url.query.label);
                        dataObject.push(url.query.data);

                        fs.writeFileSync('./data.json', JSON.stringify(jsonObject));


			console.log(url.query.label);
			console.log(url.query.data);
		
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.write('writed.');
			res.end();
		}
	}
).listen(80);
