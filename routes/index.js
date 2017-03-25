
/*
 *  * GET home page.
 *   */

exports.index = function(req, res){
      res.render('index2', { title: 'Express' });
};

/** serve jade enabled partials */
//exports.partials = function(req, res) {
//        res.render('partials/' + req.params.name);
//};
