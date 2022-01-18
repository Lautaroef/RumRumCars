// express - db
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const buyACarRoute = require('./routes/buyACar');
// components

app.use(express.static('../public'));
app.use(express.json());

// buy a car route
app.use('/api', buyACarRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    app.listen(port, console.log(`Server listening on server ${port}...`));
    await connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

start();
