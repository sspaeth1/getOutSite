var express = require('express');
var app = express();
app.set('view engine', 'ejs');



app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds', function(req,res){
  var campground = [
    { name: 'Salmon Creek', image:'https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
    { name: 'Granite Hill', image:'https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'},
    { name: 'Mountain Goats Rest', image:'https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'}
    ]

  res.render('campgrounds', {campground:campground});
});

app.listen(3000, process.env.IP, function(){ console.log('SERVER STARTED');});
