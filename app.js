var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

var campground = [
  { name: 'Salmon Creek', image:'https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
  { name: 'Granite Hill', image:'https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'},
  { name: 'Mountain Goats Rest', image:'https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'}
//C:/Users/spaet/Desktop/demoing photo.jpg
];


app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds', function(req,res){
  res.render('campgrounds', {campground:campground});
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
