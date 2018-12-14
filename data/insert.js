var sql = require('sqlite3');
sql.verbose();

var db = new sql.Database(__dirname + '/database.db');

// Insertion des données dans la base de données
db.run("INSERT INTO users('nom', 'money') VALUES(\"Romaixn\", 10000)");
