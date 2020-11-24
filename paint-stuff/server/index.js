require('dotenv').config(); 

const express = require('express');
const massive = require('massive');
const path = require('path'); // For hosting
const jwt = require('jsonwebtoken');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const signingSecret = process.env.SESSION_SECRET;

const app = express();

const unauthenticatedRoutes = ['/api/login', '/api/register'];

app.use(express.json());
app.set('etag', false);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(db => {
  app.set('db', db)
  console.log('db connected')
});

app.use(function(req, res, next) {
  res.type('application/json');

  if (unauthenticatedRoutes.includes(req.path)) {
    next();
    return;
  }

  // Only allow  the option requests
  let auth = req.header("Authorization")
  if (!auth) {
    res.status(401).send("Not authorized");
    return
  }

  let decoded = jwt.decode(auth, signingSecret);
  if (!decoded) {
    res.status(401).send("couldn't verify token");
    return
  }
  req.user_id = decoded.user_id;
  next();
});



app.listen(SERVER_PORT, () => console.log(`Server is listening on  ${SERVER_PORT}`));