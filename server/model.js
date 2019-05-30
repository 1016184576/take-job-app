const mongoose = require('mongoose');
const URL = 'mongodb://127.0.0.1/mongoose_test';
mongoose.connect(URL, (err) => {
  if (err) {
    console.log('MongoDB连接失败');
  } else {
    console.log('MongoDB连接成功');
  }
})
