const { json } = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();
const resultRouter = require('./routes/resultRoutes');
const studentRouter = require('./routes/studentRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController')

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// Routes
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/results', resultRouter);

app.all('*',(req,res,next)=>{

  next(new AppError(`Can't find ${req.originalUrl} on this server`,404));
})

app.use(globalErrorHandler)

module.exports = app;
