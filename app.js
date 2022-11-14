const express = require('express');
const { json } = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

//Calling an instance of express
const app = express();

//3rd Party middlewares
app.use(morgan('dev'));

//Middleware used by the post method to handle data sent to the server
app.use(express.json())
app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next();
})

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next()
})

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

//start a server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}.......`);
})
