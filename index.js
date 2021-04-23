const mongoose = require('mongoose')
var path = require('path');
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const route = require('./router/route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//ROUTER
app.use(route)
app.use((req,res,next)=>{
    res.send('<h1> 404 ERROR </h1>')
})

const uri = "mongodb+srv://root1:rootroot@cluster0.sdkrx.mongodb.net/leeway"
mongoose.connect(uri,  {useNewUrlParser: true, useUnifiedTopology: true})
.then(
    result => {
        app.listen(3000);
        console.log('NodeJS is running')

    }
)