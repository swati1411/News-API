var express=require("express");

var app=express();

//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname+ 'public/css'))

//template engine
app.set('views','./src/views/partials')
app.set('view engine','ejs')

//routes
const newsRouter= require('./src/routes/news')

app.use('/',newsRouter)

app.listen(3000);