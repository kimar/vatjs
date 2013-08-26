
/*
 * GET users listing.
 */

exports.index = function(req, res){
  res.render('documentation', { server: req.headers.host});
};