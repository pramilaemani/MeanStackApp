
/*
var MongoClient = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017/prototypeDB';*/


var mongo  = require('mongodb'),
    Server = mongo.Server,
    Db     = mongo.Db;

var server = new Server('localhost', 27017, {});
var db     = new Db('prototypeDB', server, {safe: false});

var collection = false;

/*MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
   
});*/

// initialize database
var init = function() {
    if (collection === false) {
        db.open(dbOpenHandler);
    }
};

var dbOpenHandler = function(err, db) {
    db.collection('vindetscollection', dbCollectionHandler);
};

var dbCollectionHandler = function(err, coll) {
    collection = coll;
};

/** returns the current db collection's status
  * @return object db collection
  */
var getCollection = function() {
    return collection !== false;
};

// search query
var search = function() {

    var result = collection.find({}, function(err) {     
        return 'search_Complete';
    });

};

// module's export functions
exports.init = init;
exports.getCollection = getCollection;
exports.search = search;
