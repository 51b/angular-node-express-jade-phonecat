
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.phoneList = function(req, res) {
    res.render('partials/phone-list');
}

exports.phoneDetail = function(req, res) {
    res.render('partials/phone-detail');
}