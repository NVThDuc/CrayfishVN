const path = require('path');
const express = require('express')

const app = express()
const handlebars = require('express-handlebars');
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')))
// Template
app.engine('hbs', handlebars(
  {extname:'.hbs'}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log('PATH: ',path.join(__dirname, 'resources/views') )


app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})
app.get('/Mua-Ban', (req, res) => {
  res.render('shop');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})