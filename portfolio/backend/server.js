import express from 'express';

const app = express();

// Middleware function to log requests
function logger(req, res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
}

// Routes for /hello and /goodbye
app.use(logger);

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/goodbye', (req, res) => {
  res.send('Goodbye World');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
