const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;

app.set('view-engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/play', (req, res)=> {
    res.render('index.ejs');
});

app.get('/highscores', (req, res)=> {
    res.render('highscore.ejs');
});

app.listen(port, ()=> {console.log(`App listening on ${port}`)});