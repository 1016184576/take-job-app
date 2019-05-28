const express = require('express');
const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1/mongoose_test';
mongoose.connect(URL, (err) => {
  if (err) {
    console.log('MongoDB连接失败');
  } else {
    console.log('MongoDB连接成功');
  }
})

//创建Schema（模式）对象
let Schema = mongoose.Schema;

let studySchema = new Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  address: {
    type: String,
    require: true
  }
})

let StudyModel = mongoose.model('Study', studySchema);



const app = express();

//添加一条数据
/* StudyModel.create({
  name: "沙和尚",
  age: 36,
  address: "流沙河"
},(err,doc)=>{
  if(!err){
    console.log(doc);
  }else{
    console.log(err);
  }
}) */


 //删除一条数据
/* StudyModel.findOneAndRemove({
  age: 38
},(err,doc)=>{
  if(!err){
    console.log(`${doc.name}删除成功`);
  }else{
    console.log(err);
  }
}) */


//更新一条数据
/* StudyModel.update({
  name: '孙悟空'
},{
  age: 500
},(err,doc)=>{
  if(!err){
    console.log(doc);
  }else{
    console.log(err);
  }
}) */

app.get('/', (req, res) => res.send('<h1>Hello React</h1>'))

app.get('/data', (req, res) => {
  StudyModel.find({
    age: { $gt: 35, $lt: 100}
  }).
  where('address').equals('流沙河').
  exec((err,doc)=>{
    if(!err){
      res.json(doc);
    }else{
      console.log(err);
    }
  })
})

app.listen(8093, () => {
  console.log('App running start at port 8093');
})

