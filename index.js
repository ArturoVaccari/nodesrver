const express = require('express')
const app = express()
const users = require('./routes/users')
const personaggi = require('./routes/personaggi')
let port = process.argv[2] || 8080

/*
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectId;
const uri = "mongodb+srv://Vaccari:Vaccari@cluster0-7hppq.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    if(err) {
        console.log('Error occured while connectrig to MongoDB Atls...\n', err);
    }
    console.log("connected")
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object

codice ridondante
  //read
  client.db("PrimaProva").collection("Data").find().toArray(function(err, result){
      if (err) throw err
      console.log(result)
  })
  //insert
  client.db("PrimaProva").collection("Data", function(err,collection){
    const mario = { name: "Mario", lastname: "Rossi"};
    collection.insertOne(mario);

    client.db("PrimaProva").collection("Data").countDocuments(function(err, count){
        if (err) throw err;
        console.log("Total Rows: " + count);
    });
  });
  //update
  client.db("PrimaProva").collection("Data", function(err,collection){
      const newOne = {name: "Pippo", lastname: "Stark", vivo: false};
      collection.updateOne({_id:ObjectId("5cd54ae48630ed313874a65e")}, {$set: newOne},
      function(err, result){
          if(err) throw err;
          console.log("Document Updated Successfully");
      });
  });
  //delete
  client.db("PrimaProva").collection("Data").remove({_id:ObjectId("5cd54ae48630ed313874a65e")}, {w:1}, function (err, result){
    if (err) throw err;
    console.log(`Document removed successfuly: ${result}`);
  });
  


  client.close();
});

 */

app.use(express.urlencoded({extended: false}))

const myLogger = (req, res, next) => {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

app.use('/v0.1/users', users)
app.use('/v0.1/personaggi', personaggi)
app.use('/v0.2/personaggi', personaggi)
// app.use('/v0.2/admin/', personaggi)


app.use((req, res) => {
  res.status(404).send('what??? error 404')
});
app.listen(port)  