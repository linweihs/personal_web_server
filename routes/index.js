
/*
 *  * GET home page.
 *   */

exports.index = function(req, res){
     // res.render('index3');
      res.redirect('/resume');
};

exports.resume = function(req, res){
      res.render('index3');
};

/** serve jade enabled partials */
//exports.partials = function(req, res) {
//        res.render('partials/' + req.params.name);
//};
