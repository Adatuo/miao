var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'))//设置模板文件的位置
app.set('view engine', 'pug')//设置模板的语法（或者说模板的引擎，用什么引擎就得用它的语法）

app.use(logger('dev'));//每一行都log出一个dev
/*里面大致是这样写的
app.use((req,res,next)=>{
  console.log('[dev]',req.method,req.url);
  next()
})*/

app.use(express.json())//解析请求体为json格式的请求体，并将结果放到req.body上
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())//解析cookie的中间件
app.use(express.static(path.join(__dirname, 'public')))//静态文件中间件

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
