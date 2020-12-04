const hakkinda = function(req, res, next) {
  res.render('hakkinda', 
    { 
      title: 'Hakkında',
      'footer' : 'Tarık Buğra KAYA 2020'
    }
  );
}

module.exports = {
  hakkinda
}