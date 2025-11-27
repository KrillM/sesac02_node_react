const http = require('http')
const fs = require('fs').promises
const path = require('path')
const port = 8084

const parseCookie = (cookie = '') => 
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v)
            return acc
        }, {})

http.createServer(async (req,res)=>{
    const cookies = parseCookie(req.headers.cookie)

    // 주소가 /login 으로 시작할 때
    if(req.url.startsWith('/login')){
        const url = new URL(req.url, `http://localhost:${port}`)
        const name = url.searchParams.get('name')
        const expires = new Date()
        // 쿠키 유효 시간을 현재 시간 + 5분으로 설정
        expires.setMinutes(expires.getMinutes() + 5)
        res.writeHead(302, {
            location: '/',
            'set-cookie' : `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
        })
        res.end()
    } // 주소가 /이면서 name이라는 쿠키가 있는 경우
    else if(cookies.name){
        res.writeHead(200, {'content-type' : 'text/plain; charset=utf-8'})
        res.end(`Hello, ${cookies.name}`)
    } // 주소가 /이면서 name이라는 쿠키카 없는 경우
    else{
        try{
            const data = await fs.readFile(path.join(__dirname, 'cookie.html'))
            res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'})
            res.end(data)
        }
        catch(err){
            res.writeHead(500, {'content-type' : 'text/plain; charset=utf-8'})
            res.end(err.message)
        }
    }
})

.listen(port, () => {
    console.log(`${port} 포트에서 서버 대기 중입니다.`)
})