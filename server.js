const express = require('express');
const app = express();

const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path')

const PORT = 3000 || process.env.PORT;


app.get('/',(req, res)=>{
    res.render('home')
})

app.use(expressLayout);
app.set('views',path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
})
