const http = require('http')
const fs = require('fs').promises
const port = 8081

http.createServer(async(req, res)=>{
    try{
        const data = await fs.readFile('./server03.html')
        res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'})
        res.end(data)
    }
    catch(err){
        console.error(err)
        res.writeHead(500, {'content-type' : 'text/html; charset=utf-8'})
        res.end(err.message)
    }
})

.listen(port, ()=>{
    console.log(`${port} 포트에서 서버 대기 중입니다.`)
})