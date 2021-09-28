const newsRouter = require('./news')


function route(app){

    app.use('/news',newsRouter);

    app.get('/', (req, res) => {
        res.render('home');
      })
      app.get('/news', (req, res) => {
        res.render('news');
      })
      app.get('/Mua-Ban', (req, res) => {
        res.render('shop');
      })
      
      app.get('/search', (req, res) => {
        res.render('search');
      })

}
module.exports = route;
