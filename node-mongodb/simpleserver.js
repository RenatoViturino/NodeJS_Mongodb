var MongoClient= require('mongodb').MongoClient,
 assert= require('assert');

//Conection URL
var url = 'mongodb://localhost:27017/confusion';

// Use connect method to connect to the Server
MongoClient.connect(url,function (err,db) {
assert.equal(err,null);
console.log("Conectado");

var collection= db.collection("dishes");
collection.insertOne({nome:'Renato', description:'Teste'},function(err,result){
  assert.equal(err,null);
  console.log("After Insert:");
  console.log(result.ops);

  collection.find({}).toArray(function(err,docs){
    assert.equal(err,null);
    console.log("Encontrado: ");
    console.log(docs);
    db.dropCollection("dishes",function(err,result){
      assert.equal(err,null);
      db.close();
    });
  });
});
    });
