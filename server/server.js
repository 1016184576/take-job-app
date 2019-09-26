const express = require('express');
const userRouter = require('./user');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('sendMessage',data => {
    console.log(data)
    io.emit('broadcast',data);
  })
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user',userRouter)

http.listen(8093, () => {
  console.log('App running start at port 8093');
})

