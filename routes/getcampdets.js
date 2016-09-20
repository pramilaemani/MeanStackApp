var express = require('express');
var router = express.Router();
var log4js = require('log4js');

log4js.clearAppenders();
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('app.log'), 'app');
var logger = log4js.getLogger('app');
logger.setLevel(log4js.levels.TRACE);


var traceLogger = function (message) {
        logger.trace('message');
    };

var errorLogger = function (message) {
        logger.trace(message);
    };

/* GET CampDetslist page. */
router.get('/getcampdetslist', function(req, res) {	
	var db = req.db;
  logger.trace ("In getcampdetslist service....");
    var collection = db.get('campdetcollection');    
    var campid = req.query.campid;    
    var vinid = req.query.vinid;
    logger.trace ("Entered VinId is "+vinid);
    collection.find({'VIN_ID':vinid},function(e,docs){
      //  res.json(docs); handle error
        res.render('CampDetslist', {
            "CampDetslist" : docs        
    });
});

});
module.exports = router;