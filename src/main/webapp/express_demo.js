//express_demo.js 文件
var express = require('express');
var path = require('path')
var app = express();
app.use(express.static(path.join(__dirname, 'static')));

var http = require('http');

// 用于请求的选项
var options = {
   host: 'localhost',
   port: '8080',
   path: '/api/demo'  
};

// 处理响应的回调函数
var callback = function(response){
   // 不断更新数据
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // 数据接收完成
      console.log(body);
	 
   });
   
}

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/api/s/demo', function (req, res) {
   // 向服务端发送请求
	var res1 = http.request(options, function(response){
		// 不断更新数据
		var body = '';
		response.on('data', function(data) {
			body += data;
		});
   
		response.on('end', function() {
			// 数据接收完成
			//console.log(body);
			res.end(body);
		});
	});
	
	//res.send(res1.end());
	res1.end();
})

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})