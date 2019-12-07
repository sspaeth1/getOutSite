var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cat', {useNewUrlParser: true, useUnifiedTopology: true });

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model('Cat', catSchema);

var George = new Cat({
  name:'George',
  age: 11,
  temperament: 'Grouchy'
})

Cat.create({
  name: 'Snow White',
  age: 15,
  temperament:'Bland'
},function( err, cat){
  if(err) {
    console.log(err);
    console.log("Error making cat object");
  } else{
    console.log('add cat cats');
    console.log(cat);
  }
});


// George.save(function(err, cat){
//   if (err){
//     console.log('Something went wrong with Can constructor');
//   } else {
//     console.log(cat);
//   }
// });

Cat.find({}, function(err, cats){
    if(err){
      console.log('error logged');
      console.log(err);
    }else{
      console.log('List all the cats ');
      console.log(cats);

    }
})
