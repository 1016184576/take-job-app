const express = require('express');
const utility = require('utility');
const model = require('./model');
const UserModel = model.getModel('user');
const ChatModel = model.getModel('chat');

const Router = express.Router();

Router.get('/list', (req, res) => {
  authLogin(req, res);
  const { type } = req.query;
  console.log(req.query)
  UserModel.find(type ? {type} : {}, (err, doc) => {
    return res.json({
      code: 0,
      data: doc,
      msg: ''
    });
  })
})

Router.get('/getChatList',(req,res)=>{
  authLogin(req, res);
  const { user } = req.query;
})

//删除所有的
/* UserModel.deleteMany({},(err, doc) => {
  console.log(doc)
}) */

Router.post('/login', (req, res) => {
  console.log(req.body)
  const { userName, pwd } = req.body;
  UserModel.findOne({
    username: userName
  }, (err, doc) => {
    if (err) {
      return res.json({
        code: 1,
        data: false,
        msg: '登陆请求失败！'
      })
    }
    //判断用户名是否存在
    if (doc) {
      UserModel.findOne({
        username: userName,
        pwd: utility.md5(pwd)
      }, (error, user) => {
        if (error) {
          return res.json({
            code: 1,
            data: false,
            msg: '登陆请求失败！'
          })
        } else {
          //判断用户名密码是否正确
          if (user) {
            res.cookie('userId', user._id);
            return res.json({
              code: 0,
              data: {
                userName: user.username,
                userType: user.type,
                token: 'AHSDW41225DWD45SD55WS21A',
                userId: user._id,
                userType: user.type,
                title: user.title,
                company: user.company,
                desc: user.desc,
                money: user.money,
                avatar: user.avatar,
              },
              msg: ''
            })
          } else {
            return res.json({
              code: 1,
              data: false,
              msg: '用户名或密码错误'
            })
          }
        }
      })
    } else {
      return res.json({
        code: "1",
        data: false,
        msg: '用户名不存在！'
      })
    }
  })
})

Router.post('/updateInfo', (req, res) => {
  authLogin(req, res);
  const { userId } = req.body;
  UserModel.findOneAndUpdate({
    _id: userId
  }, {
      ...req.body
    }, (err, doc) => {
      if (doc) {
        const data = Object.assign({}, {
          userName: doc.username,
          userType: doc.type,
          userId: doc._id,
          userType: doc.type
        }, req.body);
        res.json({
          code: 0,
          data: data,
          msg: ''
        })
      } else {
        res.json({
          code: 1,
          data: null,
          msg: '更新失败,用户不存在！'
        })
      }
    })
})

Router.post('/register', (req, res) => {
  console.log(req.body)
  const { checked, username, password } = req.body;
  //查询用户是否存在
  UserModel.findOne({ username }, (err, doc) => {
    if (doc) {
      return res.json({
        code: 1,
        data: false,
        msg: '用户已存在'
      })
    } else {
      //注册用户
      UserModel.create({
        username,
        pwd: utility.md5(password),
        type: checked
      }, (err, user) => {
        if (err) {
          return res.json({
            code: 1,
            data: false,
            msg: '注册失败！'
          })
        } else if (user) {
          res.cookie('userId', user._id);
          return res.json({
            code: 0,
            data: {
              userName: user.username,
              userType: user.type,
              token: 'AHSDW41225DWD45SD55WS21A',
              userId: user._id,
              userType: user.type,
              title: user.title,
              company: user.company,
              desc: user.desc,
              money: user.money,
              avatar: user.avatar,
            },
            msg: ''
          })
        }
      })
    }
  })
})


authLogin = (req, res) => {
  const userId = req.cookies.userId;
  if (!userId) {
    return res.json({
      code: 2,
      data: null,
      msg: '用户未登录'
    });
  }
}

module.exports = Router;
