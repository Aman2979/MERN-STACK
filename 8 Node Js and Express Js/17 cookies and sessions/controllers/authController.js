exports.getLogin = (req, res, next) => {
  res.render('auth/login', {pageTitle: 'login', isLoggedIn: false});
}

exports.postLogin = (req, res, next) => {
  console.log(req.isLoggedIn, req.body)
  res.cookie('isLoggedIn', true)
  res.redirect('/');
}