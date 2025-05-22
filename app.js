const express = require('express')
const path = require('path')
const app = express()

// 配置模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 静态文件中间件
app.use(express.static(path.join(__dirname, 'public')))

// 解析请求体
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// 基础路由
app.get('/', (req, res) => {
  res.render('index', { title: 'SAOINK' })
})

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('服务器错误')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`)
})