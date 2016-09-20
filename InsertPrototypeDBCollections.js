var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/prototypeDB';


var insertVinDetails = function(db, callback){
	db.collection('vindetscollection').insert([
		{VIN_ID:"CAMPAIGNDOBJ00021",
		CAMPAIGN_ID:"RX8",
		MODEL_ID: "RE3H5BJW",
		VIN_CAMPAIGN_STATUS: "NULL"},
		{VIN_ID:"JHLRD1866XC000039",
		CAMPAIGN_ID:"RX8",
		MODEL_ID: "GE8H3CEXW",
		VIN_CAMPAIGN_STATUS: "NULL"},
		{VIN_ID:"CAMPAIGNDOBJ00022",
		CAMPAIGN_ID:"RB8",
		MODEL_ID: "ZE2H5CEW",
		VIN_CAMPAIGN_STATUS: "NULL"},
		{VIN_ID:"JHLRD1869WC081262",
		CAMPAIGN_ID:"RB8",
		MODEL_ID: "GE8H5CEXW",
		VIN_CAMPAIGN_STATUS: "T"}], function(err, result){
	assert.equal(err, null);
	console.log("Inserted a document into the VinDetails Collection.");
	callback();
});
};

var insertCampDetails = function(db, callback){
	db.collection('campdetcollection').insert([
		{VIN_ID:"CAMPAIGNDOBJ00021",
		CAMPAIGN_ID: "RX8",
		CAMPAIGN_TYPE_NO: "7",
		CAMPAIGN_NAME: "BRAKE MASTER VACUUM LEAKAGE",	
	    RESTRICTED_CAMPAIGN: "T"},
		{VIN_ID:"CAMPAIGNDOBJ00021",
		CAMPAIGN_ID: "RB8",
		CAMPAIGN_TYPE_NO: "7",
		CAMPAIGN_NAME: "BRAKE MASTER VACUUM LEAKAGE",
		RESTRICTED_CAMPAIGN: "F"},
		{VIN_ID:"JHLRD1866XC000039",
		CAMPAIGN_ID: "RX6",
		CAMPAIGN_TYPE_NO: "7",
		CAMPAIGN_NAME: "BRAKE MASTER VACUUM LEAKAGE",
	    RESTRICTED_CAMPAIGN: "T"},
		{VIN_ID:"JHLRD1866XC000039",
		CAMPAIGN_ID: "RT7",
		CAMPAIGN_TYPE_NO: "7",
		CAMPAIGN_NAME: "BRAKE MASTER VACUUM LEAKAGE",
		RESTRICTED_CAMPAIGN: "F"}], function(err, result){
	assert.equal(err, null);
	console.log("Inserted a document into the CampDetails Collection.");
	callback();
});
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
   insertVinDetails(db, function(){});
   insertCampDetails(db, function(){});
});