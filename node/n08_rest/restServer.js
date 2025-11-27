const http = require('http')
const fs = require('fs').promises
const path = require('path')
const port = 8082

const users = {} // 데이터 저장용

http.createServer(async (req, res)=>{
    try{
        console.log(req.method, req.url)
        if(req.method === 'GET'){
            if(req.url === '/'){
                const data = await fs.readFile(path.join(__dirname, 'restFront.html'))
                res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'})
                return res.end(data)
            }
            else if(req.url === '/about'){
                const data = await fs.readFile(path.join(__dirname, 'about.html'))
                res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'})
                return res.end(data)
            }
            else if(req.url === '/users'){
                res.writeHead(200, {'content-type' : 'applcation/json; charset=utf-8'})
                return res.end(JSON.stringify(users))
            }

            // 주소가 /도 /about도 아니면
            try{
                const data = await fs.readFile(path.join(__dirname, req.url))
                return res.end(data)
            } catch(err){
                // 주소에 해당하는 라우트를 찾지 못하므로 404 에러를 던짐
                console.log(err)
            }
        }
        else if(req.method === 'POST'){
            if(req.url === '/user'){
                let body = ''
                // 요청의 body를 stream 형식으로 받음
                req.on('data', (data)=> {
                    body += data
                })
                // 요청의 body를 다 받은 후 실행됨
                return req.on('end', ()=>{
                    console.log('POST 본문(Body):', body)
                    const { name } = JSON.parse(body)
                    const id = Date.now()
                    users[id] = name
                    res.writeHead(201, {'content-type' : 'text/plain; charset=utf-8'})
                    res.end('등록 성공')
                })
            }
        }
        else if(req.method === 'PUT'){
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2]
                let body = ''
                req.on('data', (data)=> {
                    body += data
                })

                return req.on('end', ()=>{
                    console.log('PUT 본문(Body):', body)
                    users[key] = JSON.parse(body).name
                    res.writeHead(200, {'content-type' : 'application/json; charset=utf-8'})
                    return res.end(JSON.stringify(users))
                })
            }
        }
        else if(req.method === 'DELETE'){
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2]
                delete users[key]
                res.writeHead(200, {'content-type' : 'application/json; charset=utf-8'})
                return res.end(JSON.stringify(users))
            }
        }

        res.writeHead(404)
        return res.end('NOT FOUND')
    }
    catch(err){
        console.log(err)
        res.writeHead(205, {'content-type' : 'text/html; charset=utf-8'})
        res.end(err.message)
    }
})

.listen(port, () => {
    console.log(`${port} 포트에서 서버 대기 중입니다.`)
})