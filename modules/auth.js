var jwt = require('jsonwebtoken');
var secret = "POKE_39157732_AABB1234";

module.exports = {

    secret : secret,
    'googleAuth' : {
        'clientID'      : '886305963993-latplkor85god2c38nloo40t9r17irfj.apps.googleusercontent.com',
        'clientSecret'  : 'l4Xt2ELt2pf-9nXaULa4xX4Z',
        'callbackURL'   : 'https://powerful-depths-54671.herokuapp.com/auth/google/callback'
    },
    isAuthenticated : function(req, res, next) {

        var token = req.headers['x-access-token'];

        if(token){
            jwt.verify(token, secret, function(err, decoded) {
                if (err) {
                    return res.status(401).send({message: 'Failed to authenticate token.'});
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        }else {

            // if there is no token
            // return an error
            return res.status(403).send({
                message: 'No token provided.'
            });

        }

    },
    isAdmin : function(req, res, next) {
        if (req.decoded.isAdmin){
            return next();
        }
        else{
            res.status(401).end("Unauthorized, you are not an admininstrator.");
        }
    },

    isAssociatedWithMail : function(req, res, next){

        if(req.params.id == req.decoded._id) {
            return next()
        } else {
            res.status(401).end("Unauthorized, this resource does not belong to your account");
        }


        //if(req.isAuthenticated()){
        //    if(req.params.user_email == req.user.email) {
        //        return next()
        //    } else {
        //        res.status(401).end("Unauthorized, this resource does not belong to your account");
        //    }
        //} else {
        //    res.status(401).end("Unauthorized");
        //}

    }
};