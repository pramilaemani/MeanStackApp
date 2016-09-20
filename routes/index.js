// Variable declaration

var express = require('express');
var router = express.Router();
// Get the details from the mongodb under Vin collection details
function findVinDetails(req, res, next){
	var db = req.db;
    var vincollection = db.get('vindetscollection');
    vincollection.find({},function(e,docs){
       req.vincollection = docs;
       next();
});
}
// Get the details from the mongodb under Camp collection details
function findCampDetails(req, res, next){
	var db = req.db;
    var campcollection = db.get('campdetcollection');
    campcollection.find({},function(e,docs){
    	req.campcollection = docs;
    	next();
        
});
}
// To display the home page and vin and camp details
function renderHomePage(req, res){
	res.render('index',{'vindetslist': req.vincollection, 'campdetslist': req.campcollection})
}

router.get('/', findVinDetails, findCampDetails, renderHomePage);



module.exports = router;


