var items=require("./itemarray.js")
var http=require('http')
var server=http.createServer(function(req,res)
{
    if(req.url=='/getitem'&&req.method=='GET')
    {
        res.write(JSON.Stringify(items.itemarray))
        res.end()
    }
    if(req.url=='/additem'&&req.method=='POST')
    {
        req.on('data',d=>{
            process.stdout.write(d)
            res.write("item added")
            items.itemarray.push(JSON.parse(d))
            console.log(items.itemarray.toString())
                    res.end()
        })

    }
    if(req.url=='/putitem'&&req.method=='PUT')
    {
       /* req.on('data',d=>{
            process.stdout.write(d)
            res.write("item added")
            items.itemarray.push(JSON.parse(d))
            console.log(items.itemarray.toString())*/
            res.write("file uploading through put")
                    res.end()
       }
       if(req.url=='/updateitem'&&req.method=='PATCH')
    {
        req.on('data',d=>{
            
            
               var narray=items.itemarray.filter((d)=>{
                d.itemName!=items.itemName
                items.itemarray =narray
               })
            
             res.end()
        })
    }
    server.listen(5001,function(){
        console.log("server started")
        })
       /* server.listen(5000,function(){
            console.log("server started")
        })
        if(req.url=='/getitem' && req.method=='GET')
        {
            res.write("server received")
            res.end()
        }
        server.listen(5000,function(){
            console.log("server started")})*/
    
})            
       
    

