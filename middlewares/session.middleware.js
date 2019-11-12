const shortid = require('shortid');

module.exports =function(req, res, next){
    if(!req.signedCookies.sessionId){
        let sessionId = shortid.generate();
        res.cookie('sessionId', sessionId, {
            signed: true
        });
        db.get('session').push({
            id: sessionId
        }).write();
    }
    next();
}