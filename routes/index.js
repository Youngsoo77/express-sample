var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var client = mysql.createConnection({
    host     : 'lcoal',
    port     : '3306',
    user     : 'user',
    password : 'password',
    database : 'db'
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', client.query("SELECT * FROM USER;", function(err, result, fields){
      if(err){
          console.log("쿼리문에 오류가 있습니다.");
      }
      else{
          console.log(result);
      }
  }));

});

module.exports = router;
