var jwt = require('passport-jwt').Strategy;
var jwtextract = require('passport-jwt').ExtractJwt;


var User = require('../models/blog/user');
var config=require('../Config/config');

module.exports = function(passport)
{
  var opts={};
  opts.jwtFromRequest = jwtextract.fromAuthHeader();
  opts.secretOrKey = config.secret;
  passport.use(new jwt(opts,function(jwt_payload,done){
    User.findOne({id : jwt_payload.id},function(err,user)
  {
    console.log(user);
    if(err){
        return done(err,false);
    }
    if(user)
    {
      return done(null,user);

    }
    else {
        return done(null,false);
    }
  });
}));
}
