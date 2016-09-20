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
/*
 * GET getvcdetslist.
 */
router.get('/getvindetslist', function(req, res) {
	logger.trace ("In getvindetslist service....");
    var db = req.db;
    var collection = db.get('vindetscollection');
    var vinid = req.query.vinid;
    var campid = req.query.campid;
    logger.trace ("Entered VinId is "+campid);
    collection.find({'CAMPAIGN_ID':campid},function(e,docs){
        res.render('vindetslist', {
            "vindetslist" : docs
        
    });
});

});


module.exports = router;