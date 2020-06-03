var http = require("http"); //like include the module http 
//Cntrl+shift+C

http.createServer(function(request,response){
    var body = "Khushboo Gupta";
    var len = body.length;
    response.writeHead(200,{
        "Content-Type":'text/plain',
        "Content-Length":len
    });
    response.end(body);
}).listen(3000);

console.log("Sever is running .The port is 3000");