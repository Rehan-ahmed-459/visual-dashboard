const express=require('express')
const { MongoClient } = require('mongodb');
const path=require('path')
const getData=require('./routes/getData')
const app =express();
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
app.use('/api/v1/',getData)
app.get('/',(req,res)=>{
res.render('index');
})
app.listen(9000, () => {
    console.log('Server started on port 3000');
  });