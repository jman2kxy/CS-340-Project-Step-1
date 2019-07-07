var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_igiozeej',
  password        : '7355',
  database        : 'cs340_igiozeej'
});

module.exports.pool = pool;