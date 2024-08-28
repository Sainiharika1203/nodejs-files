var http=require('http')
var login=require('./login')
var server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/json'});
    if(req.method=="POST"&&req.url=="/registration"){
        req.on('data',(chunk)=>{
            user=JSON.parse(chunk);
        })
        req.on('end',()=>{
            res.end(login.adduser(user))
        })
    }
    else if(req.method=="POST"&&req.url=="/login"){
        req.on('data',(chunk)=>{
            user=JSON.parse(chunk);
        })
        req.on('end',()=>{
            res.end(login.checklogin(user.username,user.password,user.mobilenum))
        })
    }

})
const port=3000;
server.listen(port,()=>{
    console.log(`server is running at port http://localhost:${port}`)
})
   
    
    