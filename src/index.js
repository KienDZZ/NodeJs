const handlebars = require('express-handlebars');
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resources\\views'));
console.log('dssds',path.join(__dirname,'resources\\views'));
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})