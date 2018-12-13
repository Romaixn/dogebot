var sql = require('sqlite3');
sql.verbose();

var db = new sql.Database(__dirname + '/database.db');

// Création de la base de données
db.run("create table users(id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, money INT)");
