const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const httpServer = require('http').Server(app);
const fetch = require('node-fetch');
const { API_KEY } = require('./config/API_KEY.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/holiday', async (req, res) => {
  if (!req.query.year) {
    res.send('Error');
    return;
  }

  // toISOStringで日本時間に合わせるため、9時間足す
  const timeMin = new Date(req.query.year, 0, 1, 9).toISOString();
  const timeMax = new Date(req.query.year, 11, 31, 9).toISOString();

  const fetchResponse = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/japanese__ja@holiday.calendar.google.com/events?key=${API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${timeMin}&timeMax=${timeMax}`,
    { method: 'GET' }
  );
  const json = await fetchResponse.json();
  res.json(json);
});

httpServer.listen(3000, () => {
  console.log('http-server ready at http://localhost:3000');
});
