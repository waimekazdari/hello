let http = require('http')
//pour pouvoir lire un fichier
let fs = require('fs')
let server = http.createServer()
let url = require('url')
//let replace = require('replace')
server.on('request', (request,response) =>{
  response.writeHead(200)
  let query =url.parse(request.url,true).query;
  var name = query.name===undefined ? 'Anonyme':query.name;
  /*
  if(query.name === undefined){
    response.write('bonjour Anonyme')
  }
  else{
    response.write('bonjour '+query.name)
  }*/
  fs.readFile('index.html',(err,data)=> {
    if(err) {
      response.writeHead(404)
      response.end("ce fichier n'existe pas")
    }
    else{
      data = data.toString().replace('{{namee}}',name)
      response.writeHead(200,{
        "content-type" : "text/html; charset=UTF-8"
             })
     response.end(data)
   }
 })
})
  //console.log('il a eu une requete');
server.listen(8080)
