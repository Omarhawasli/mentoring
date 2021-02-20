const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
//set ejs as a view engine
app.set('view engine', 'ejs');
//set the views folder
app.set('views',__dirname + '/views')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  //res.sendFile(__dirname + '/views/index.html')
  res.render('index');
})

app.get('/about', (req, res) => {
  // res.sendFile(__dirname + '/views/about.html')
  res.render('about')
})

app.get('/marketing', (req, res) => {
  res.render('marketing')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/blog', (req, res) => {
  res.render('blog')
})


app.listen(port, () => {
  console.log(`App is running on port:${port}`)
})