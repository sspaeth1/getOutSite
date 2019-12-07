var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/getoutsite',{useNewUrlParser: true, useUnifiedTopology: true });
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

//  Below manuall loading campsite samples//
// var campground = [
//   { name: 'Salmon Creek', image:'https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
//   { name: 'Granite Hill', image:'https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'},
//   { name: 'Mountain Goats Rest', image:'https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'}
//C:/Users/spaet/Desktop/demoing photo.jpg
// ];

var campgroundSchema = new mongoose.Schema({
    name:String,
    image:String
});
var Campground = mongoose.model('Campground', campgroundSchema);

Campground.create({
  name: 'Salmon Creek',
  image:'https://imgur.com/gallery/Kp4ZKg3'
}, function(err, campground){
  if(err){
    console.log(err);
  }else{
   //  console.log("Newly Created Campground");
    console.log(campground);
  }
});

app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds', function(req,res){
  Campground.find({},function(err, allCampgrounds){
    if(err){
      console.log(err);
    }else{
      console.log("Newly Created Campground");
      res.render('campgrounds', {campground:allCampgrounds});
    }
  });
});

app.post('/campgrounds', function(req,res){
  // res.send('added a campground');
   var image = req.body.image;
   var name = req.body.name;
   var newCampground = {name: name, image: image}

   campground.push(newCampground);
   res.redirect('/campgrounds');
});


app.get('/campgrounds/new', function(req, res){
      res.render('new');
});



app.listen(3000, process.env.IP, function(){ console.log('SERVER STARTED');});
