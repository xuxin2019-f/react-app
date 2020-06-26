const express = require('express')
const mongoose = require('mongoose')
// 27017后写集合，没有就新建
const DB_URL = 'mongodb://localhost:27017/myapp'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('mongo connect success')
})
const User = mongoose.model(
  'user',
  new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true },
  })
)
// 新建
// User.create(
//   {
//     name: 'xuxin',
//     age: 18,
//   },
//   (err, doc) => {
//     if (!err) {
//       console.log(doc)
//     } else {
//       console.log(doc)
//     }
//   }
// )
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>首页</h1>')
})
app.get('/data', (req, res) => {
  // 全局查找直接find({})
  User.find({}, (err, doc) => {
    res.json(doc)
  })
})

app.listen(9093, function () {
  console.log('app is running')
})
