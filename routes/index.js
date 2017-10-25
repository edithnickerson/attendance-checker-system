var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connectionstring="mongodb://edithnickerson:Ma@0509@ds157444.mlab.com:57444/cidn4382";
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

mongoose.Promise = global.Promise;

var studentSchema = new mongoose.Schema({
   buffID: String,
   firstName:String,
   lastName:String
});

var Student=mongoose.model('Student', studentSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/greeting', function(req, 
res, next){
    res.send("Hello, I greet you");
});
router.get('/greeting2', function(req, 
res, next){
    res.send("Hello, I greet you again");
});

router.get('/add-random-student', function(req, res, next){
    
    var rand = new Student(
        {buffID: '012345' ,
         firstName:'Random',
         lastname: 'Student' 
            
        });
rand.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('The student is saved in the db');
  }
});

module.exports = router;
