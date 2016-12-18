const express =require('express');
const app =express();
const User=require('./models/user.js');
const cors =require('cors');      //解决同源策略
app.use(cors());
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/digicity');
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  // let user=new User({username:"Strom",email:"12342",age:23});
  //   user.save()
  console.log('success!')
});
app.get('/',function(req,res){

  res.send('hello world \n')
})
app.post('/posts',function(req,res){
  let user=new User(req.body);
  user.save();
  console.log(req.body);
  res.send('ok')
})
app.listen(3000,function(){
  console.log('running on port 3000 ...')
});
