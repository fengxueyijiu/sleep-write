const express =require('express');
const app =express();
const routes = require('./routes');
const Post = require('./models/post');
const cors =require('cors');      //解决同源策略
app.use(cors());


const bodyParser=require('body-parser');
app.use(bodyParser.json());

const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sleep-write');
var db = mongoose.connection;
db.on('error', function(err){
  console.log(err)
});
db.once('open', function() {
  console.log('success!')
});
routes(app);
app.listen(4000,function(){
  console.log('running on port 4000 ...')
});
