var sql = require('sqlite3');
sql.verbose();

var db = new sql.Database(__dirname + '/database.db');

// Update dans la base de données
db.run('UPDATE users SET money = 9999999 where id = 1');
