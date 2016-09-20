var express = require('express');
var router = express.Router();

/*
 * GET getvcdetslist.
 */
router.get('/getvcdetslist', function(req, res) {
    var db = req.db;
    var collection = db.get('vcdetcollection');
    var vinid = req.query.vinid;
    collection.find({'VIN_ID':vinid},function(e,docs){
        res.render('vcdetslist', {
            "vcdetslist" : docs
        
    });
});

});


module.exports = router;
