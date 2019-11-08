//加载相关资源
const http = require('http')
const _map = require('./common/interfaceMap')
const _filter = require('./common/interfaceFilter')
const Mock = require('mockjs')
//定义服务端口
const port=8080;


//创建服务并监听端口
http.createServer((req, res) => {
    //定义并修改header信息
    const origin = typeof (req.headers.origin) === 'undefined' ? '*' : req.headers.origin

    console.log('log=>',"访达")
    console.log('log=>',req.headers);
    //根据访问方式不同走不同的分支
    if (req.method === 'OPTIONS') {
        console.log('type', req.method)
        res.end(null)
    }
    //如果通过POST方式访问
    if (req.method === 'POST') {
        console.log('type', "post")
        var postData = ''
        //获取访问入参
        req.addListener('data', function(dataBuffer) {
            console.log('data=>',dataBuffer)
            postData += dataBuffer
        })
        //解析访问入参
        req.addListener('end', () => {
            console.log('url=>', req.url)
            console.log('data=>',postData)



            postData = JSON.parse(postData)

            //根据接口获取基础假数据
            const originData = _map[req.url]
                ? Mock.mock(_map[req.url])
                : ''
            //根据接口组装随机假数据
            const data = typeof (_filter[req.url]) === 'function'
                ? _filter[req.url](originData, postData)
                : originData
            //假装网络延迟，返回假数据
            setTimeout(() => {
                console.log(data)
                res.end(JSON.stringify(data))
            }, parseInt(((Math.random() - 0.5) + 1) * 500), 10) // 0-2s的随机数
        })
    }
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': true,
        'Nonce':'',
        'Timestamp':'',
        'Security':'',
        'Signature':''

    })
}).listen(port)
console.log('正在监听'+port+'端口')
