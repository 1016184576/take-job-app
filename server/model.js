const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1/takejob-chat';
mongoose.connect(URL, (err) => {
  if (err) {
    console.log('MongoDB连接失败');
  } else {
    console.log('MongoDB连接成功');
  }
})


const models = {
  user:{
    'username':{type:String,require: true},
    'pwd':{type:String,require: true},
    'type':{type:String,require: true},
    'avatar':{type:String},
    'desc':{type:String},
    'title':{type:String},
    'company':{type:String},
    'money':{type:String},
  },
  chat:{}
}

for (const key in models) {
  if (models.hasOwnProperty(key)) {
    mongoose.model(key,new mongoose.Schema(models[key]));
  }
}

module.exports = {
  getModel(name){
    return mongoose.model(name);
  }
}
